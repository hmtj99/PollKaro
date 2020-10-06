import 'package:flutter/material.dart';
import 'package:poll_karo/screens/home_screen.dart';
import 'package:poll_karo/screens/launch_screen.dart';

void main() {
  runApp(PollKaro());
}
class PollKaro extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: "/",
      routes: {
        "/": (context) => Scaffold(
          body: Launchscreen(),
        ),
        '/home': (context) => Scaffold(
          appBar: AppBar(
            title: Text("Poll Karo"),
          ),
          body: HomeScreen(),
        ),
        '/result': (context) => Scaffold(
          appBar: AppBar(
            title: Text("Result"),
            leading: IconButton(
              icon: Icon(Icons.home),
              color: Colors.white,
              onPressed: () {
                print('Result Screen');
              },
            ),
          ),
        ),
      },
    );
  }
}
