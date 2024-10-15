import 'package:flutter/material.dart';
import 'package:sigidakanwmobile/ApprenantNav.dart';
import 'Login.dart';
import 'service/AuthService.dart'; // Assurez-vous que le chemin d'importation est correct
import 'CustomTextField.dart';

class Signup extends StatefulWidget {
  const Signup({super.key});

  @override
  _SignupState createState() => _SignupState();
}

class _SignupState extends State<Signup> {
  bool pass = true; // Correction: pas besoin de 'late' ici
  String email = '';
  String password = '';
  final AuthService _authService = AuthService();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    double largeur = MediaQuery.of(context).size.width;
    double hauteur = MediaQuery.of(context).size.height;

    return Scaffold(
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: Container(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height,
          padding: EdgeInsets.all(30),
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Expanded(
                  flex: 4,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Container(
                        width: 100,
                        height: 100,
                        child: Image.asset(
                          "Assets/Images/logo_green.png",
                          fit: BoxFit.fill,
                        ),
                      ),
                      SizedBox(height: largeur * 0.021),
                      Container(
                        width: largeur * 0.95,
                        padding: EdgeInsets.symmetric(horizontal: 15.0, vertical: 8.0),
                        child: Column(
                          children: [
                            SizedBox(height: 16.0),
                            CustomTextField(
                              labelText: 'Email',
                              hintText: 'Entrez votre email',
                              controller: emailController,
                              prefixIcon: Icons.email,
                              keyboardType: TextInputType.emailAddress,
                              onChanged: (value) {
                                setState(() {
                                  email = value;
                                  print(email);
                                });
                              },
                            ),
                            const SizedBox(height: 16.0),
                            CustomTextField(
                              labelText: 'Mot de passe',
                              hintText: 'Entrez votre mot de passe',
                              isPassword: pass,
                              controller: passwordController,
                              suffixIcon: IconButton(
                                icon: Icon(pass ? Icons.visibility : Icons.visibility_off),
                                onPressed: () {
                                  setState(() {
                                    pass = !pass; // Change l'état du mot de passe
                                  });
                                },
                              ),
                              onChanged: (value) {
                                setState(() {
                                  password = value;
                                });
                              },
                            ),
                            const SizedBox(height: 16.0),
                            CustomTextField(
                              labelText: 'Email',
                              hintText: 'Entrez votre email',
                              controller: emailController,
                              prefixIcon: Icons.email,
                              keyboardType: TextInputType.emailAddress,
                              onChanged: (value) {
                                setState(() {
                                  email = value;
                                  print(email);
                                });
                              },
                            ),
                            const SizedBox(height: 16.0),
                            CustomTextField(
                              labelText: 'Mot de passe',
                              hintText: 'Entrez votre mot de passe',
                              isPassword: pass,
                              controller: passwordController,
                              suffixIcon: IconButton(
                                icon: Icon(pass ? Icons.visibility : Icons.visibility_off),
                                onPressed: () {
                                  setState(() {
                                    pass = !pass; // Change l'état du mot de passe
                                  });
                                },
                              ),
                              onChanged: (value) {
                                setState(() {
                                  password = value;
                                });
                              },
                            ),
                            const SizedBox(height: 16.0),
                            SizedBox(
                              width: double.infinity,
                              height: 52,
                              child: ElevatedButton(
                                onPressed: () async {
                                  // Appel du service d'authentification
                                  String? token = await _authService.login(email, password);

                                  if (token != null) {
                                    // Redirection après connexion réussie
                                    Navigator.push(
                                      context,
                                      MaterialPageRoute(builder: (context) => ApprenantNav()),
                                    );
                                  } else {
                                    // Affichage d'un message d'erreur si la connexion échoue
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      SnackBar(content: Text('Connexion échouée. Veuillez vérifier vos identifiants.')),
                                    );
                                  }
                                },
                                style: ElevatedButton.styleFrom(
                                  elevation: 5,
                                  backgroundColor: Color(0xFFFFFFFF),
                                  padding: EdgeInsets.symmetric(horizontal: 18, vertical: 7),
                                  shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(10),
                                  ),
                                ),
                                child: const Text(
                                  "Se connecter",
                                  style: TextStyle(
                                    color: Color(0xFF000000),
                                    fontSize: 16,
                                    fontWeight: FontWeight.w500,
                                    fontFamily: "Lexend",
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  width: double.infinity,
                  child: Wrap(
                    direction: Axis.horizontal,
                    crossAxisAlignment: WrapCrossAlignment.center,
                    children: [
                      const Text(
                        "Vous n'avez pas de compte ?",
                        textAlign: TextAlign.center,
                        style: TextStyle(fontFamily: "Lexend"),
                      ),
                      TextButton(
                        onPressed: () {
                          Navigator.push(context, MaterialPageRoute(builder: (context) => Login()));
                        },
                        child: const Text(
                          "Inscriver-vous",
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontFamily: "Lexend",
                            color: Color(0xFF58CC02),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}