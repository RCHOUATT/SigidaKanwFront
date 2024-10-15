import 'package:flutter/material.dart';
import 'package:sigidakanwmobile/Splash.dart';
import 'AccueillPage.dart';
import 'ApprenantNav.dart';

import 'Login.dart';
/*import 'ChatRoom.dart';
import 'profil.dart';
import 'users.dart';
import 'home.dart';
import 'AdminNav.dart';
import 'Level.dart';*/

void main() async{
  runApp(const SigidaKanw());
}

class SigidaKanw extends StatelessWidget{
  const SigidaKanw ({super.key});

  @override
  Widget build(BuildContext context){
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "My ticketing system",
      initialRoute: "/",
      routes: {
        "/splash": (context) => Splash(),
        "/": (context) => Splash(),
        "/accueil": (context) => Accueil(),
        "/login" : (context) => const Login(),
        /*
        "/home" : (context) => const Home(),
        "/adminnav" : (context) => Adminnav(),
        "/apprenantNav" : (context) => ApprenantNav(),
        "/formateurNav" : (context) => FormateurNav(),
        "/users" : (context) => Users(),
        "/profil" : (context) => const Profil(),
        "/chatAll" : (context) => const Chatall(),
        "/chatRoom" : (context) => const ChatRoom(),*/
      },
    );
  }

}

