import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:sigidakanwmobile/Login.dart';
import 'package:sigidakanwmobile/service/AuthService.dart';

import 'CustomTextField.dart';

class Profil extends StatelessWidget {
  Profil({super.key});
  final AuthService _authService = AuthService();

  @override
  Widget build(BuildContext context) {

    bool option = false;
    final TextEditingController searchUser = TextEditingController();
    late String searchValue;
    late bool pass = true;
    return Scaffold(
      body: Container(
          padding: const EdgeInsets.fromLTRB(6, 31, 6, 18),
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height,
          color: const Color(0xFFE3EDFD),
          child: LayoutBuilder(
            builder: (context, constraints){
              double width = constraints.maxWidth;
              double heigth = constraints.maxHeight;
              return
                Container(
                  width: width,
                  height: heigth,
                  decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(20)
                  ),
                  child: SingleChildScrollView(
                    scrollDirection: Axis.vertical,
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(18, 0, 18, 0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Container(
                            width: double.infinity,
                            height: 188.89,
                            decoration: const BoxDecoration(
                                color: const Color(0xFF5ADA60),
                                //color: const Color(0xFFFFFFFF),
                                borderRadius: BorderRadius.only(
                                  bottomLeft: Radius.circular(9999),
                                  bottomRight: Radius.circular(9999),
                                )
                            ),
                            child: LayoutBuilder(
                              builder: (context, constraints){
                                double width1 =constraints.maxWidth;
                                double heigth1 = constraints.maxHeight;
                                return
                                  Container(
                                      width: width1 *0.3129,
                                      height: heigth1 * 0.7882,
                                      child: Row(
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        crossAxisAlignment: CrossAxisAlignment.center,
                                        children: [
                                          Column(
                                            mainAxisAlignment: MainAxisAlignment.center,
                                            crossAxisAlignment: CrossAxisAlignment.center,
                                            children: [
                                              CircleAvatar(
                                                radius: 50,
                                                child: ClipOval(
                                                  child: Image.asset(
                                                    "Assets/Images/profil.png",
                                                    fit: BoxFit.fill,
                                                  ),
                                                ),
                                              ),
                                              Row(
                                                children: [
                                                  const Column(
                                                    children: [
                                                      const Text(
                                                        "@Username",
                                                        maxLines: 1,
                                                        overflow: TextOverflow.ellipsis,
                                                        style: TextStyle(
                                                            fontSize: 16,
                                                            color: Color(0xFFFFFFFF),
                                                            fontFamily: "Lexend",
                                                            fontWeight: FontWeight.w900
                                                        ),
                                                      ),
                                                      const Text(
                                                        "Apprenant",
                                                        maxLines: 1,
                                                        overflow: TextOverflow.ellipsis,
                                                        style: TextStyle(
                                                            fontSize: 14,
                                                            color: Color(0xFFFFFFFF),
                                                            fontFamily: "Lexend",
                                                            fontWeight: FontWeight.w900
                                                        ),
                                                      ),
                                                    ],
                                                  ),
                                                  const SizedBox(width: 15),
                                                  Image.asset(
                                                    "Assets/Icons/support.png",
                                                    fit: BoxFit.fill,
                                                    width: 24,
                                                    height: 24,
                                                  ),
                                                ],
                                              )
                                            ],
                                          ),
                                        ],
                                      )
                                  );
                              },
                            ),
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Container(
                                margin: const EdgeInsets.fromLTRB(0, 10, 0, 5),
                                padding: const EdgeInsets.symmetric(horizontal: 0, vertical: 0),
                                child: const Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text(
                                      "Statistique",
                                      textAlign: TextAlign.left,
                                      style: TextStyle(
                                        fontSize: 16,
                                        fontWeight: FontWeight.w800,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              //Statistic
                              Container(
                                  decoration: BoxDecoration(
                                    color: Colors.white,
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                  child: Column(
                                    children: [
                                      Row(
                                        children: [
                                          Expanded(
                                              flex: 1,
                                              child: Padding(
                                                padding: EdgeInsets.all(0),
                                                child: Container(
                                                  width: 155,
                                                  height: 85,
                                                  decoration: BoxDecoration(
                                                    borderRadius: BorderRadius.circular(12),
                                                  ),
                                                  child: Row(
                                                    children: [
                                                      Expanded(
                                                        flex: 1,
                                                        child :CircleAvatar(
                                                          backgroundColor: Color(0xFFffffff),
                                                          radius: 50,
                                                          child: Image.asset(
                                                            "Assets/Icons/flame.png",
                                                            fit: BoxFit.cover,
                                                            width: 40,
                                                            height: 40,
                                                          ),
                                                        ),
                                                      ),
                                                      Expanded(
                                                          flex: 2,
                                                          child: Padding(
                                                            padding: EdgeInsets.fromLTRB(0, 10, 0, 10),
                                                            child: Container(
                                                              width: double.infinity,
                                                              padding: EdgeInsets.all(10),
                                                              child: Column(
                                                                children: [
                                                                  Container(
                                                                    width: double.infinity,
                                                                    child: const Text(
                                                                      "0",
                                                                      textAlign: TextAlign.left,
                                                                      style: TextStyle(
                                                                        color: Color(0xFF000000),
                                                                        fontFamily: "Lexend",
                                                                        fontSize: 16,
                                                                        fontWeight: FontWeight.w900,
                                                                      ),
                                                                    ),
                                                                  ),
                                                                  Container(
                                                                    width: double.infinity,
                                                                    child: const Text(
                                                                      "Jour d'activité",
                                                                      textAlign: TextAlign.left,
                                                                      overflow: TextOverflow.ellipsis,
                                                                      maxLines: 1,
                                                                      style: TextStyle(
                                                                        color: Color(0xFF000000),
                                                                        fontFamily: "Lexend",
                                                                        fontSize: 12,
                                                                        fontWeight: FontWeight.w500,
                                                                      ),
                                                                    ),
                                                                  ),
                                                                ],
                                                              ),
                                                            ),
                                                          )
                                                      )
                                                    ],
                                                  ),
                                                ),
                                              )
                                          ),
                                          Expanded(
                                              flex: 1,
                                              child: Padding(
                                                padding: EdgeInsets.all(0),
                                                child: Container(
                                                  width: 155,
                                                  height: 85,
                                                  decoration: BoxDecoration(
                                                    borderRadius: BorderRadius.circular(12),
                                                  ),
                                                  child: Row(
                                                    children: [
                                                      Expanded(
                                                        flex: 1,
                                                        child :CircleAvatar(
                                                          backgroundColor: Color(0xFFffffff),
                                                          radius: 50,
                                                          child: Image.asset(
                                                            "Assets/Icons/star.png",
                                                            fit: BoxFit.cover,
                                                            width: 40,
                                                            height: 40,
                                                          ),
                                                        ),
                                                      ),
                                                      Expanded(
                                                          flex: 2,
                                                          child: Padding(
                                                            padding: EdgeInsets.fromLTRB(0, 10, 0, 10),
                                                            child: Container(
                                                              width: double.infinity,
                                                              padding: EdgeInsets.all(10),
                                                              child: Column(
                                                                children: [
                                                                  Container(
                                                                    width: double.infinity,
                                                                    child: const Text(
                                                                      "0",
                                                                      textAlign: TextAlign.left,
                                                                      style: TextStyle(
                                                                        color: Color(0xFF000000),
                                                                        fontFamily: "Lexend",
                                                                        fontSize: 16,
                                                                        fontWeight: FontWeight.w900,
                                                                      ),
                                                                    ),
                                                                  ),
                                                                  Container(
                                                                    width: double.infinity,
                                                                    child: const Text(
                                                                      "Points gagnés",
                                                                      textAlign: TextAlign.left,
                                                                      overflow: TextOverflow.ellipsis,
                                                                      maxLines: 1,
                                                                      style: TextStyle(
                                                                        color: Color(0xFF000000),
                                                                        fontFamily: "Lexend",
                                                                        fontSize: 12,
                                                                        fontWeight: FontWeight.w500,
                                                                      ),
                                                                    ),
                                                                  ),
                                                                ],
                                                              ),
                                                            ),
                                                          )
                                                      )
                                                    ],
                                                  ),
                                                ),
                                              )
                                          ),
                                        ],
                                      ),
                                      Row(
                                        children: [
                                          Expanded(
                                              flex: 1,
                                              child: Padding(
                                                padding: EdgeInsets.all(0),
                                                child: Container(
                                                  width: 155,
                                                  height: 85,
                                                  decoration: BoxDecoration(
                                                    borderRadius: BorderRadius.circular(12),
                                                  ),
                                                  child: Row(
                                                    children: [
                                                      Expanded(
                                                        flex: 1,
                                                        child :CircleAvatar(
                                                          backgroundColor: Color(0xFFffffff),
                                                          radius: 50,
                                                          child: Image.asset(
                                                            "Assets/Icons/level-up.png",
                                                            fit: BoxFit.cover,
                                                            width: 40,
                                                            height: 40,
                                                          ),
                                                        ),
                                                      ),
                                                      Expanded(
                                                          flex: 2,
                                                          child: Padding(
                                                            padding: EdgeInsets.fromLTRB(0, 10, 0, 10),
                                                            child: Container(
                                                              width: double.infinity,
                                                              padding: EdgeInsets.all(10),
                                                              child: Column(
                                                                children: [
                                                                  Container(
                                                                    width: double.infinity,
                                                                    child: const Text(
                                                                      "0",
                                                                      textAlign: TextAlign.left,
                                                                      style: TextStyle(
                                                                        color: Color(0xFF000000),
                                                                        fontFamily: "Lexend",
                                                                        fontSize: 16,
                                                                        fontWeight: FontWeight.w900,
                                                                      ),
                                                                    ),
                                                                  ),
                                                                  Container(
                                                                    width: double.infinity,
                                                                    child: const Text(
                                                                      "Niveau actuel",
                                                                      textAlign: TextAlign.left,
                                                                      overflow: TextOverflow.ellipsis,
                                                                      maxLines: 1,
                                                                      style: TextStyle(
                                                                        color: Color(0xFF000000),
                                                                        fontFamily: "Lexend",
                                                                        fontSize: 12,
                                                                        fontWeight: FontWeight.w500,
                                                                      ),
                                                                    ),
                                                                  ),
                                                                ],
                                                              ),
                                                            ),
                                                          )
                                                      )
                                                    ],
                                                  ),
                                                ),
                                              )
                                          ),
                                          Expanded(
                                              flex: 1,
                                              child: Padding(
                                                padding: EdgeInsets.all(0),
                                                child: Container(
                                                  width: 155,
                                                  height: 85,
                                                  decoration: BoxDecoration(
                                                    borderRadius: BorderRadius.circular(12),
                                                  ),
                                                  child: Row(
                                                    children: [
                                                      Expanded(
                                                        flex: 1,
                                                        child :CircleAvatar(
                                                          backgroundColor: Color(0xFFffffff),
                                                          radius: 50,
                                                          child: Image.asset(
                                                            "Assets/Icons/bitcoin.png",
                                                            fit: BoxFit.cover,
                                                            width: 40,
                                                            height: 40,
                                                          ),
                                                        ),
                                                      ),
                                                      Expanded(
                                                          flex: 2,
                                                          child: Padding(
                                                            padding: EdgeInsets.fromLTRB(0, 10, 0, 10),
                                                            child: Container(
                                                              width: double.infinity,
                                                              padding: EdgeInsets.all(10),
                                                              child: Column(
                                                                children: [
                                                                  Container(
                                                                    width: double.infinity,
                                                                    child: const Text(
                                                                      "0",
                                                                      textAlign: TextAlign.left,
                                                                      style: TextStyle(
                                                                        color: Color(0xFF000000),
                                                                        fontFamily: "Lexend",
                                                                        fontSize: 16,
                                                                        fontWeight: FontWeight.w900,
                                                                      ),
                                                                    ),
                                                                  ),
                                                                  Container(
                                                                    width: double.infinity,
                                                                    child: const Text(
                                                                      "Pièces gagnés",
                                                                      textAlign: TextAlign.left,
                                                                      overflow: TextOverflow.ellipsis,
                                                                      maxLines: 1,
                                                                      style: TextStyle(
                                                                        color: Color(0xFF000000),
                                                                        fontFamily: "Lexend",
                                                                        fontSize: 12,
                                                                        fontWeight: FontWeight.w500,
                                                                      ),
                                                                    ),
                                                                  ),
                                                                ],
                                                              ),
                                                            ),
                                                          )
                                                      )
                                                    ],
                                                  ),
                                                ),
                                              )
                                          ),
                                        ],
                                      ),
                                    ],
                                  )
                              ),
                            ],
                          ),
                          Container(
                              width: double.infinity,
                              height: 250,
                              margin: const EdgeInsets.fromLTRB(0, 0, 0, 13),
                              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 15),
                              decoration: BoxDecoration(
                                  color: Colors.white,
                                  borderRadius: BorderRadius.circular(15)
                              ),
                              child: Container(
                                  width: double.infinity,
                                  height: double.infinity,
                                  child: LayoutBuilder(
                                    builder: (context, constraints){
                                      double width = constraints.maxWidth;
                                      double height = constraints.maxHeight;
                                      return SingleChildScrollView(
                                        scrollDirection: Axis.vertical,
                                        child: Wrap(
                                          direction: Axis.horizontal,
                                          spacing: width * 0.10,
                                          runSpacing: 14,
                                          children: [
                                            Container(
                                              width: width * 0.445,
                                              child: const Column(
                                                mainAxisAlignment: MainAxisAlignment.start,
                                                crossAxisAlignment: CrossAxisAlignment.start,
                                                children: [
                                                  Text(
                                                    "Nom",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Lexend",
                                                      fontWeight: FontWeight.w900,
                                                      fontSize: 16,
                                                    ),
                                                  ),
                                                  Text(
                                                    "Ouattara",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Lexend",
                                                      fontWeight: FontWeight.w500,
                                                      fontSize: 14,
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                            Container(
                                              width: width * 0.445,
                                              child: const Column(
                                                mainAxisAlignment: MainAxisAlignment.start,
                                                crossAxisAlignment: CrossAxisAlignment.start,
                                                children: [
                                                  Text(
                                                    "Prenom",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Lexend",
                                                      fontWeight: FontWeight.w900,
                                                      fontSize: 16,
                                                    ),
                                                  ),
                                                  Text(
                                                    "Cheick Hamed",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Lexend",
                                                      fontWeight: FontWeight.w500,
                                                      fontSize: 14,
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                            Container(
                                              width: width * 0.445,
                                              child: const Column(
                                                mainAxisAlignment: MainAxisAlignment.start,
                                                crossAxisAlignment: CrossAxisAlignment.start,
                                                children: [
                                                  Text(
                                                    "Tel",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Lexend",
                                                      fontWeight: FontWeight.w900,
                                                      fontSize: 16,
                                                    ),
                                                  ),
                                                  Text(
                                                    "72834301",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Lexend",
                                                      fontWeight: FontWeight.w500,
                                                      fontSize: 14,
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                            Container(
                                              child: const Column(
                                                mainAxisAlignment: MainAxisAlignment.start,
                                                crossAxisAlignment: CrossAxisAlignment.start,
                                                children: [
                                                  Text(
                                                    "Email",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Lexend",
                                                      fontWeight: FontWeight.w900,
                                                      fontSize: 16,
                                                    ),
                                                  ),
                                                  Text(
                                                    "CheickHamedOuattara865@gmail.com",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Lexend",
                                                      fontWeight: FontWeight.w500,
                                                      fontSize: 14,
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                            Container(
                                              child: Row(
                                                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                                children: [
                                                  Container(
                                                    child: const Column(
                                                      mainAxisAlignment: MainAxisAlignment.start,
                                                      crossAxisAlignment: CrossAxisAlignment.start,
                                                      children: [
                                                        Text(
                                                          "Mot de passe",
                                                          overflow: TextOverflow.ellipsis,
                                                          maxLines: 1,
                                                          style: TextStyle(
                                                            fontFamily: "Lexend",
                                                            fontWeight: FontWeight.w900,
                                                            fontSize: 16,
                                                          ),
                                                        ),
                                                        Text(
                                                          ".......................",
                                                          overflow: TextOverflow.ellipsis,
                                                          maxLines: 1,
                                                          style: TextStyle(
                                                            fontFamily: "Lexend",
                                                            fontWeight: FontWeight.w500,
                                                            fontSize: 14,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                  ),
                                                  Container(
                                                    width: 56,
                                                    child: TextButton(
                                                      style: TextButton.styleFrom(
                                                          foregroundColor: Colors.green
                                                      ),
                                                      child: Image.asset(
                                                        "Assets/Icons/update.png",
                                                        color: Color(0xFFFF8181),
                                                        fit: BoxFit.fill,
                                                      ),
                                                      onPressed: () {

                                                      },
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          ],
                                        ),
                                      );
                                    },
                                  )
                              )
                          ),
                          ElevatedButton(
                            onPressed: () async {
                              // Appel du service d'authentification
                              await _authService.logout();

                              // Affichage d'un message d'erreur si la connexion échoue
                              ScaffoldMessenger.of(context).showSnackBar(
                                const SnackBar(content: Text('Deconnexion réussie avec succès.')),
                              );

                              Navigator.pushReplacement(
                                context,
                                MaterialPageRoute(builder: (context)=> const Login()),
                              );
                            },
                            style: ElevatedButton.styleFrom(
                              elevation: 10,
                              backgroundColor: const Color(0xFFEAEAEA),
                              padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 7),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(10),
                              ),
                            ),
                            child: const Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: [
                                const Text(
                                  "Se deconnecter",
                                  style: TextStyle(
                                    color: Color(0xFF000000),
                                    fontSize: 16,
                                    fontWeight: FontWeight.w500,
                                    fontFamily: "Lexend",
                                  ),
                                ),
                              ],
                            )
                          ),
                        ],
                      ),
                    ),
                  )
                );
            },
          )
      ),
    );
  }
}
