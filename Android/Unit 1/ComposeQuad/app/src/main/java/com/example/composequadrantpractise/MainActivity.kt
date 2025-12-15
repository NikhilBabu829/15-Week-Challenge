package com.example.composequadrantpractise

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.composequadrantpractise.ui.theme.ComposeQuadrantPractiseTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ComposeQuadrantPractiseTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    ThisHasEverything(modifier = Modifier.padding(innerPadding).fillMaxSize())
                }
            }
        }
    }
}

@Composable
fun ThisHasEverything(modifier: Modifier){
    Column(modifier = modifier) {
        Row(modifier = Modifier.fillMaxWidth()) {
            Column(modifier = Modifier.background(color = Color(0xFFEADDFF)).fillMaxHeight(0.5f).fillMaxWidth(0.5f).padding(16.dp), horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.Center) {
                Text(stringResource(R.string.Q1Title), Modifier.padding(bottom = 16.dp), fontWeight = FontWeight.Bold)
                Text(stringResource(R.string.Q1Content))
            }
            Column(modifier = Modifier.background(color = Color(0xFFD0BCFF)).fillMaxHeight(0.5f).fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.Center) {
                Text(stringResource(R.string.Q2Title), Modifier.padding(bottom = 16.dp), fontWeight = FontWeight.Bold)
                Text(stringResource(R.string.Q2Content))
            }
        }
        Row(modifier = Modifier.fillMaxWidth()) {
            Column(modifier = Modifier.background(color = Color(0xFFB69DF8)).fillMaxHeight().fillMaxWidth(0.5f), horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.Center) {
                Text(stringResource(R.string.Q3Title), Modifier.padding(bottom = 16.dp), fontWeight = FontWeight.Bold)
                Text(stringResource(R.string.Q3Content))
            }
            Column(modifier = Modifier.background(color = Color(0xFFF6EDFF)).fillMaxHeight().fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.Center) {
                Text(stringResource(R.string.Q4Title), Modifier.padding(bottom = 16.dp), fontWeight = FontWeight.Bold)
                Text(stringResource(R.string.Q4Content))
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    ComposeQuadrantPractiseTheme {
        ThisHasEverything(modifier = Modifier.fillMaxSize())
    }
}