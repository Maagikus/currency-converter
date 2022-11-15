import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppConvertor } from './components/convertor/convertor.component'
import { AppHeader } from './components//header/header.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
	declarations: [
		AppComponent,
		AppHeader,
		AppConvertor
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
