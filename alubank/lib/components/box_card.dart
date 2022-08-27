import 'package:flutter/material.dart';

class BoxCard extends StatelessWidget {
  final Widget content;


const BoxCard ({ Key? key, required this.content }) : super(key: key);

  @override
  Widget build(BuildContext context){
    return Container(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: content,
      ),
      decoration: BoxDecoration(
        color: Theme.of(context).cardColor,
        borderRadius: BorderRadius.circular(10.0),
        boxShadow: kElevationToShadow[3] 
      ),
    );
  }
}