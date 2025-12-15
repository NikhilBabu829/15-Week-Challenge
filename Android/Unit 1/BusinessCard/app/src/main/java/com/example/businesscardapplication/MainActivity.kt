package com.example.businesscardapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Call
import androidx.compose.material.icons.rounded.Email
import androidx.compose.material.icons.rounded.ThumbUp
import androidx.compose.material3.Icon
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.businesscardapplication.ui.theme.BusinessCardApplicationTheme


var Icon = Icons.Rounded

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            BusinessCardApplicationTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    MainFunction(modifier = Modifier)
                }
            }
        }
    }
}

@Composable
fun MainFunction(modifier : Modifier){
    Box(modifier = modifier.fillMaxSize()) {
        Column(modifier = modifier.fillMaxSize(), verticalArrangement = Arrangement.Center, horizontalAlignment = Alignment.CenterHorizontally) {
            Image(painter = painterResource(R.drawable.ic_launcher_foreground), contentDescription = null, modifier = modifier.padding(bottom = 12.dp))
            Text("Name of The Company", fontWeight = FontWeight.Medium, fontSize = 32.sp, modifier = modifier.padding(bottom = 12.dp))
            Text("title")
        }
        Column(modifier = modifier.fillMaxSize().padding(10.dp), verticalArrangement = Arrangement.Bottom, horizontalAlignment = Alignment.CenterHorizontally) {
            Row(modifier = modifier.fillMaxWidth().padding(bottom = 5.dp), horizontalArrangement = Arrangement.Center) {
                Icon(Icon.Call, contentDescription = null, modifier = modifier.padding(end = 10.dp))
                Text("+000 0000000000")
            }
            Row(modifier = modifier.fillMaxWidth().padding(bottom = 5.dp), horizontalArrangement = Arrangement.Center) {
                Icon(Icon.ThumbUp, contentDescription = null, modifier = modifier.padding(end = 10.dp))
                Text("abcdefghij@something.com")
            }
            Row(modifier = modifier.fillMaxWidth().padding(bottom = 5.dp), horizontalArrangement = Arrangement.Center) {
                Icon(Icon.Email, contentDescription = null, modifier = modifier.padding(end = 10.dp))
                Text("abcdefghij@something.com")
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    BusinessCardApplicationTheme {
        MainFunction(modifier = Modifier)
    }
}