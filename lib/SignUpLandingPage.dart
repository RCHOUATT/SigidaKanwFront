import "package:flutter/material.dart";

class Accueil extends StatelessWidget {
  const Accueil({super.key});

  @override
  Widget build(BuildContext context) {
    double largeur = MediaQuery.of(context).size.width;
    double hauteur = MediaQuery.of(context).size.height;
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Container(
              width : 337,
              height: 337,
              child: Image.asset(
                "Assets/Images/lendPageIllust.png",
                fit: BoxFit.fill,
              ),
            ),
            SizedBox(
              height: largeur * 0.021,
            ),
            Container(
              width: 241,
              child: const Text(
                "Gestion de ticket",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 16,
                  fontFamily: "Nunito",
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            SizedBox(
              height: largeur * 0.021,
            ),
            Container(
              width: 241,
              child: const Text(
                "Simplifiez vos demandes d'aide, trouvez des solutions rapidement.",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 16,
                  fontFamily: "Nunito",
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            SizedBox(
              height: largeur * 0.021,
            ),
            ElevatedButton(
              onPressed: (){
                Navigator.pushNamed(context, "/login");
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: Color(0xFF1E90FF),
                padding: EdgeInsets.symmetric(horizontal: 18, vertical: 7)
              ),
              child: const Text(
                "Continuer",
                style: TextStyle(
                  color: Color(0xFFFFFFFF)
                ),
              )
            )
          ],
        ),
      ),
    );
  }
}

