import 'dart:async';
import 'package:flutter/material.dart';
import 'package:sigidakanwmobile/AccueillPage.dart';
import 'ApprenantNav.dart';
import 'service/AuthService.dart';
import 'Login.dart';

class Splash extends StatefulWidget {
  @override
  _SplashState createState() => _SplashState();
}

class _SplashState extends State<Splash> with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  late Animation<double> _fadeInAnimation;
  late Animation<double> _scaleAnimation;
  final AuthService _authService = AuthService(); // Initialiser AuthService

  @override
  void initState() {
    super.initState();

    // Initialisation de l'animation controller
    _animationController = AnimationController(
      vsync: this,
      duration: Duration(seconds: 3), // Durée de l'animation
    );

    // Animation de fondu (opacity)
    _fadeInAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(
        parent: _animationController,
        curve: Curves.easeIn,
      ),
    );

    // Animation de zoom (scale)
    _scaleAnimation = Tween<double>(begin: 0.5, end: 1.0).animate(
      CurvedAnimation(
        parent: _animationController,
        curve: Curves.easeInOut,
      ),
    );

    _animationController.forward(); // Démarre l'animation

    // Simuler un délai avant de passer à la page d'accueil
    Timer(Duration(seconds: 3), _checkLoginStatus);
  }

  Future<void> _checkLoginStatus() async {
    final String? token = await _authService.getToken();
    print(token);

    if (token != null) {
      print(token);
      // Rediriger vers la page d'accueil si le token est valide
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => ApprenantNav()),
      );
    } else {
      // Rediriger vers la page de connexion si le token n'est pas trouvé
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => Login()),
      );
    }
  }

  @override
  void dispose() {
    _animationController.dispose(); // Libérer les ressources d'animation
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xFF58CC02),
      body: Center(
        child: FadeTransition(
          opacity: _fadeInAnimation, // Appliquer l'animation de fondu
          child: ScaleTransition(
              scale: _scaleAnimation, // Appliquer l'animation de zoom
              child: LayoutBuilder(
                builder: (context, Constraints){
                  return Image.asset(
                    'Assets/Images/logo_white.png',
                    fit: BoxFit.cover,
                  );
                },
              )
          ),
        ),
      ),
    );
  }
}
