import 'dart:convert';
import 'package:http/http.dart' as http;

class CrudServiceWithoutImage {
  final String apiUrl = 'http://10.0.2.2:8080/sigidaKanw'; // URL de ton API backend

  Stream<List<dynamic>> getdata(String endpoint,) async* {
    final response = await http.get(Uri.parse('$apiUrl/$endpoint/Afficher'));
    if (response.statusCode == 200) {
      print(jsonDecode(response.body));
      yield jsonDecode(response.body);
    } else {
      throw Exception('Produit non trouvé');
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

}
