import 'package:sigidakanwmobile/Modal/Pays.dart';

import 'GenreUser.dart';

class Utilisateur {
  int? id;
  String nom;
  Pays? pays;
  String email;
  DateTime dateBirthday;
  String adresse;
  String? telephone;
  String password;
  dynamic? role; // Assurez-vous que vous savez comment sérialiser cela
  GenreUser? genreUser;
  dynamic? files; // Assurez-vous que vous savez comment sérialiser cela

  Utilisateur({
    this.id,
    required this.nom,
    required this.pays,
    required this.email,
    required this.dateBirthday,
    required this.adresse,
    this.telephone,
    required this.password,
    this.role,
    required this.genreUser,
    this.files,
  });

  // Méthode pour convertir l'objet en JSON pour les requêtes HTTP
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'nom': nom,
      'pays': pays?.toJson(), // Vérifiez que Pays a une méthode toJson()
      'email': email,
      'dateBirthday': dateBirthday.toIso8601String(),
      'adresse': adresse,
      'telephone': telephone,
      'password': password,
      'role': role, // Assurez-vous que cela est sérialisable
      'genreUser': genreUser?.toJson(), // Vérifiez que GenreUser a une méthode toJson()
      'files': files, // Assurez-vous que cela est sérialisable
    };
  }

  // Méthode pour créer un objet Utilisateur à partir d'un JSON
  factory Utilisateur.fromJson(Map<String, dynamic> json) {
    return Utilisateur(
      id: json['id'],
      nom: json['nom'],
      pays: json['pays'] != null ? Pays.fromJson(json['pays']) : null, // Ajoutez cette ligne
      email: json['email'],
      dateBirthday: DateTime.parse(json['dateBirthday']),
      adresse: json['adresse'],
      telephone: json['telephone'],
      password: json['password'],
      role: json['role'], // Assurez-vous que cela est désérialisable
      genreUser: json['genreUser'] != null ? GenreUser.fromJson(json['genreUser']) : null, // Ajoutez cette ligne
      files: json['files'], // Assurez-vous que cela est désérialisable
    );
  }
}


/*// Classe Files (pour le fichier image ou autre fichier joint)
class Files {
  int id;
  String fileName;
  String fileType;
  String fileUrl;

  Files({required this.id, required this.fileName, required this.fileType, required this.fileUrl});

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'fileName': fileName,
      'fileType': fileType,
      'fileUrl': fileUrl,
    };
  }

  factory Files.fromJson(Map<String, dynamic> json) {
    return Files(
      id: json['id'],
      fileName: json['fileName'],
      fileType: json['fileType'],
      fileUrl: json['fileUrl'],
    );
  }
}*/
