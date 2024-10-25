import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;


class CrudServiceWithoutImage {
  final String apiUrl = 'http://localhost:8080/sigidaKanw'; // URL de ton API backend

  Stream<List<dynamic>> getdata(String endpoint,) async* {
    final response = await http.get(Uri.parse('$apiUrl/$endpoint/Afficher'));
    if (response.statusCode == 200) {
      yield jsonDecode(response.body);
    } else {
      throw Exception('Element non trouvé');
    }
  }
  /*Future<List<dynamic>> getdata(String endpoint,) async {
    final response = await http.get(Uri.parse('$apiUrl/$endpoint/Afficher'));
    if (response.statusCode == 200) {
      print(jsonDecode(response.body));
      return jsonDecode(response.body);
    } else {
      throw Exception('Produit non trouvé');
    }
  }*/

  Future<dynamic?> post(String endpoint, Object objet) async {
    try {
      // Sérialisation de l'objet en JSON
      final String jsonBody = jsonEncode(objet);

      // Envoi de la requête POST
      final response = await http.post(
        Uri.parse('$apiUrl/$endpoint'),
        headers: <String, String>{
          'Content-Type': 'application/json', // JSON car on envoie des données sérialisées
          'Accept': 'application/json',
        },
        body: jsonBody, // Envoi du JSON sérialisé
      );

      // Vérification du code de réponse
      if (response.statusCode >= 200 && response.statusCode < 300) {
        print('Inscription réussie: ${response.statusCode}');
        return response.statusCode; // Retourne le code de succès
      } else {
        print('Échec de la connexion: ${response.statusCode}, ${response.body}');
        return null; // Retourne null en cas d'échec
      }
    } catch (e) {
      print('Erreur lors de la connexion: $e');
      return null; // Retourne null en cas d'erreur d'exécution
    }
  }

  Future<dynamic?> creerCompte(String endpoint, Object objet, {File? image}) async {
    try {
      // Sérialisation de l'objet en JSON
      final String jsonBody = jsonEncode(objet);
      print(jsonBody);

      // Création d'un multipart request
      var request = http.MultipartRequest(
        'POST',
        Uri.parse('$apiUrl/$endpoint'),
      );

      // Ajout des headers (le Content-Type sera géré par MultipartRequest)
      request.headers['Accept'] = 'application/json';

      // Ajout de l'objet JSON en tant que champ 'apprenant'
      request.fields['apprenant'] = jsonBody;

      // Ajout de l'image si elle existe
      if (image != null) {
        request.files.add(await http.MultipartFile.fromPath(
          'image', // Nom du paramètre attendu par le serveur
          image.path,
        ));
      }

      // Envoi de la requête
      final response = await request.send();

      // Vérification du code de réponse
      if (response.statusCode >= 200 && response.statusCode < 300) {
        print('Inscription réussie: ${response.statusCode}');
        return response.statusCode; // Retourne le code de succès
      } else {
        // Lire la réponse du serveur
        final responseBody = await response.stream.bytesToString();
        print('Échec de la connexion: ${response.statusCode}, $responseBody');
        return null; // Retourne null en cas d'échec
      }
    } catch (e) {
      print('Erreur lors de la connexion: $e');
      return null; // Retourne null en cas d'erreur d'exécution
    }
  }





}
