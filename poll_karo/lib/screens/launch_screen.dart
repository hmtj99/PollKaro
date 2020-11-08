import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:poll_karo/widgets/shared_widgets.dart';

class Launchscreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 400,
      margin: EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Container(
            margin: EdgeInsets.only(top:100),
            child: Text(
              "Poll Karo",
              style: TextStyle(
                fontSize: 40.0,
                fontWeight: FontWeight.bold,
                color: Colors.red,
              ),
            ),
          ),
          SizedBox(
            height: 120.0,
          ),
          LoginButton(
            label: 'LOGIN',
            onPressed: () {},
          ),
          SizedBox(
            height: 15,
          ),
          LoginButton(
            label: 'SIGN UP',
            onPressed: () {},
          ),
        ],
      ),
    );
  }
}
