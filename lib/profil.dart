import 'dart:ui';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';

import 'CustomTextField.dart';

class Profil extends StatelessWidget {
  const Profil({super.key});


  @override
  Widget build(BuildContext context) {

    bool option = false;
    final TextEditingController searchUser = TextEditingController();
    late String searchValue;
    late bool pass = true;
    return Scaffold(
      body: Container(
          padding: const EdgeInsets.fromLTRB(6, 31, 6, 18),
          width: double.infinity,
          height: double.infinity,
          color: const Color(0xFFE3EDFD),
          child: LayoutBuilder(
            builder: (context, constraints){
              double width = constraints.maxWidth;
              double heigth = constraints.maxHeight;
              return
                SingleChildScrollView(
                  scrollDirection: Axis.vertical,
                  child: Container(
                    width: width,
                    height: heigth,
                    decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(20)
                    ),
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
                                                          fontFamily: "Nunito",
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
                                                          fontFamily: "Nunito",
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
                          Container(
                              width: double.infinity,
                              height: 294,
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
                                                      fontFamily: "Nunito",
                                                      fontWeight: FontWeight.w900,
                                                      fontSize: 16,
                                                    ),
                                                  ),
                                                  Text(
                                                    "Ouattara",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Nunito",
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
                                                      fontFamily: "Nunito",
                                                      fontWeight: FontWeight.w900,
                                                      fontSize: 16,
                                                    ),
                                                  ),
                                                  Text(
                                                    "Cheick Hamed",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Nunito",
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
                                                    "ID",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Nunito",
                                                      fontWeight: FontWeight.w900,
                                                      fontSize: 16,
                                                    ),
                                                  ),
                                                  Text(
                                                    "0a9zerty",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Nunito",
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
                                                      fontFamily: "Nunito",
                                                      fontWeight: FontWeight.w900,
                                                      fontSize: 16,
                                                    ),
                                                  ),
                                                  Text(
                                                    "72834301",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Nunito",
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
                                                      fontFamily: "Nunito",
                                                      fontWeight: FontWeight.w900,
                                                      fontSize: 16,
                                                    ),
                                                  ),
                                                  Text(
                                                    "CheickHamedOuattara865@gmail.com",
                                                    overflow: TextOverflow.ellipsis,
                                                    maxLines: 1,
                                                    style: TextStyle(
                                                      fontFamily: "Nunito",
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
                                                            fontFamily: "Nunito",
                                                            fontWeight: FontWeight.w900,
                                                            fontSize: 16,
                                                          ),
                                                        ),
                                                        Text(
                                                          ".......................",
                                                          overflow: TextOverflow.ellipsis,
                                                          maxLines: 1,
                                                          style: TextStyle(
                                                            fontFamily: "Nunito",
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
                                                      onPressed: () {  },
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
                          )
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
