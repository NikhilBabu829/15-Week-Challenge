package com.example.practisearticle

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.practisearticle.ui.theme.PractiseArticleTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            PractiseArticleTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    Column(modifier = Modifier.padding(innerPadding)) {
                        ShowImage()
                        ShowText()
                    }
                }
            }
        }
    }
}



@Composable
fun ShowImage(modifier : Modifier = Modifier){
    Image(
        painter = painterResource(R.drawable.bg_compose_background),
        contentDescription = null,
        contentScale = ContentScale.FillWidth,
        modifier = modifier.fillMaxWidth()
    )
}

@Composable
fun ShowText(modifier : Modifier = Modifier){
    Column(modifier = modifier) {
        Text(stringResource(R.string.title_text), textAlign = TextAlign.Start, fontSize = 24.sp, modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp))
        Text(stringResource(R.string.sub_text), textAlign = TextAlign.Justify, modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp))
        Text(stringResource(R.string.article_body), textAlign = TextAlign.Justify, modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp))
    }
}

@Preview(showBackground = true)
@Composable
fun SamplePreview(modifier : Modifier = Modifier){
    Column {
        ShowImage()
        ShowText()
    }
}
