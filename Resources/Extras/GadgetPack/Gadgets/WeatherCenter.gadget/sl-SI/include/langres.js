////////////////////////////////////////////////////////////////////////////////
//
// LOCALIZABLE VARIABLES
//
////////////////////////////////////////////////////////////////////////////////
var L_SHOWMORE_TEXT             = "Vremenska napoved za več dni";
var L_SHOWLESS_TEXT             = "Vremenska napoved za manj dni";
var L_FULLMODE_TEXT             = "Prikaži dodatne informacije";
var L_MINIMODE_TEXT             = "Ne prikaži dodatnih informacij";
var L_REFRESH_TEXT             	= "Osveži podatke";
var lng_Updating = "Posodabljam";
var lng_NoData = "Ni povezave";
var lng_Today = "Danes";
var lng_Tomorrow = "Jutri";
var lng_Updating_Time_Text = "naslednjo posodobitev v";


Wlng_defLastSearch = "Ljubljana, Slovenia";
Wlng_defLocationCode = "SIXX0002";

Alng_defLastSearch = "Ljubljana, Slovenia";
Alng_defLocationCode = "EUR|SI|SI000|LJUBLJANA|";

WUlng_defLastSearch = "Ljubljana, Slovenia";
WUlng_defLocationCode = "Ljubljana, Slovenia";

MSNlng_defLastSearch = "Ljubljana, Slovenia";
MSNlng_defLocationCode = "wc:SIXX0002";

WElng_defLastSearch = "Ljubljana, Slovenia";
WElng_defLocationCode = "SIXX0002";

WBlng_defLastSearch = "Ljubljana, Slovenia";
WBlng_defLocationCode = "75433|LJLJ";

YAlng_defLastSearch = "Ljubljana, Slovenia";
YAlng_defLocationCode = "10385";

GISlng_defLastSearch = "Ljubljana, Slovenia";
GISlng_defLocationCode = "10381";

var periodsArray = new Array("","Večer","Noč","Jutro","Popoldan","Dan");

var lng_WeatherStatus = {
	"Chance of a Thunderstorm": "Мožne nevihte",
	"Clear": "Jasno",
	"Clear [Night]": "Jasna noč",
	"Clear and Windy": "Jasno in vetrovno",
	"Clouds Early / Clearing Late": "Zjutraj oblačno, zvečer razjasnitve",
	"Cloudy": "Оblačno",
	"Cloudy and Windy": "Оblačno in vetrovno",
	"Cloudy / Wind": "Оblačno z vetrom",
	"Fair and Windy": "Jasno in vetrovno",
	"Few Showers": "Občasne plohe",
	"Few Showers / Wind": "Občasne plohe z vetrom",
	"Few Snow Showers": "Občasne snežne plohe",
	"Few Snow Showers / Wind": "Občasne snežne plohe z vetrom",
	"Fine": "Lepo",
	"Flurries": "Rahlo sneži",
	"Fog": "Мegla",
	"Heavy Fog": "Močna megla",
	"Heavy Rain": "Močno dežuje",
	"Heavy Rain Showers": "Močni nalivi",
	"Heavy Snow and Windy": "Močno sneženje z vetrom",
	"Heavy Snow Shower": "Močna snežna ploha",
	"Heavy Snow Shower and Windy": "Močna snežna ploha in vetrovno",
	"Heavy Snow Showers": "Močna snežna ploha",
	"Heavy Snow": "Močno sneži",
	"Heavy T-Storms": "Močna nevihta z grmljenjem",
	"Hvy.snowshower": "Močno sneži",
	"Hot / Sunny": "Vroče/Sončno",
	"Hot": "Vroče",
	"Light Rain": "Rahlo dežuje",
	"Light Rain / Freezing Rain": "Rahel dež/Leden dež",
	"Light Rain / Freezing": "Rahel dež/Mraz",
	"Light Freezing Rain": "Rahel leden dež",
	"Light Rain Shower and Windy": "Rahla dežna ploha",
	"Light snow blowing snow": "Rahel snežni metež",
	"Partly Cloudy and Windy": "Deloma oblačno in vetrovno",
	"Scattered Clouds": "Občasno oblačno",
	"Scattered Flurries": "Občasno rahel sneg",
	"Scattered Flurries / Wind": "Občasno rahel sneg z vetrom",
	"Scattered Showers": "Občasne plohe",
	"Scattered Showers / Wind": "Občasne plohe z vetrom",
	"Scattered Snow Showers": "Občasne snežne plohe",
	"Showers in the Vicinity": "Plohe",
	"Sprinkles": "Rosi",
	"Thunder in the Vicinity": "Nevihta",
	"Light Rain with Thunder": "Rahel dež z nevihto",
	"Light Snow Grains": "Rahel zrnast sneg",
	"Mostly Clear": "Pretežno jasno",
	"Mostly Cloudy": "Pretežno oblačno",
	"Mostly Cloudy / Wind": "Pretežno oblačno z vetrom",
	"Mostly Cloudy and Windy": "Pretežno oblačno Pretežno sončno",
	"Mostly Sunny": "Pretežno sončno",
	"Mostly Sunny / Wind": "Pretežno sončno/Pretežno sončno",
	"N/A": "Ni podatka",
	"Overcast": "Оblačno",
	"Partial Fog": "Delno megleno",
	"Partly Clear": "Delno jasno",
	"Partly Cloudy": "Delno oblačno",
	"Partly Cloudy / Wind": "Delno oblačno z vetrom",
	"Partly Cloudy and Windy": "Delno oblačno in vetrovno",
	"Partly Sunny": "Delno sončno",
	"Partly Sunny / Wind": "Delno sončno z vetrom",
	"Thunder": "Grmenje",
	"Thunderstorms": "Nevihta z grmenjem"
};

var lng_AccuWeatherStatus = {
	"Chance of a Thunderstorm": "Мožne nevihte",
	"Clear": "Jasno",
	"Clear [Night]": "Jasna noč",
	"Clear and Windy": "Jasno in vetrovno",
	"Clouds Early / Clearing Late": "Zjutraj oblačno, zvečer razjasnitve",
	"Cloudy": "Оblačno",
	"Cloudy and Windy": "Оblačno in vetrovno",
	"Cloudy / Wind": "Оblačno z vetrom",
	"Fair and Windy": "Jasno in vetrovno",
	"Few Showers": "Občasne plohe",
	"Few Showers / Wind": "Občasne plohe z vetrom",
	"Few Snow Showers": "Občasne snežne plohe",
	"Few Snow Showers / Wind": "Občasne snežne plohe z vetrom",
	"Fine": "Lepo",
	"Flurries": "Rahlo sneži",
	"Fog": "Мegla",
	"Heavy Fog": "Močna megla",
	"Heavy Rain": "Močno dežuje",
	"Heavy Rain Showers": "Močni nalivi",
	"Heavy Snow and Windy": "Močno sneženje z vetrom",
	"Heavy Snow Shower": "Močna snežna ploha",
	"Heavy Snow Shower and Windy": "Močna snežna ploha in vetrovno",
	"Heavy Snow Showers": "Močna snežna ploha",
	"Heavy Snow": "Močno sneži",
	"Heavy T-Storms": "Močna nevihta z grmljenjem",
	"Hvy.snowshower": "Močno sneži",
	"Hot / Sunny": "Vroče/Sončno",
	"Hot": "Vroče",
	"Light Rain": "Rahlo dežuje",
	"Light Rain / Freezing Rain": "Rahel dež/Leden dež",
	"Light Rain / Freezing": "Rahel dež/Mraz",
	"Light Freezing Rain": "Rahel leden dež",
	"Light Rain Shower and Windy": "Rahla dežna ploha",
	"Light snow blowing snow": "Rahel snežni metež",
	"Partly Cloudy and Windy": "Deloma oblačno in vetrovno",
	"Scattered Clouds": "Občasno oblačno",
	"Scattered Flurries": "Občasno rahel sneg",
	"Scattered Flurries / Wind": "Občasno rahel sneg z vetrom",
	"Scattered Showers": "Občasne plohe",
	"Scattered Showers / Wind": "Občasne plohe z vetrom",
	"Scattered Snow Showers": "Občasne snežne plohe",
	"Showers in the Vicinity": "Plohe",
	"Sprinkles": "Rosi",
	"Thunder in the Vicinity": "Nevihta",
	"Light Rain with Thunder": "Rahel dež z nevihto",
	"Light Snow Grains": "Rahel zrnast sneg",
	"Mostly Clear": "Pretežno jasno",
	"Mostly Cloudy": "Pretežno oblačno",
	"Mostly Cloudy / Wind": "Pretežno oblačno z vetrom",
	"Mostly Cloudy and Windy": "Pretežno oblačno Pretežno sončno",
	"Mostly Sunny": "Pretežno sončno",
	"Mostly Sunny / Wind": "Pretežno sončno/Pretežno sončno",
	"N/A": "Ni podatka",
	"Overcast": "Оblačno",
	"Partial Fog": "Delno megleno",
	"Partly Clear": "Delno jasno",
	"Partly Cloudy": "Delno oblačno",
	"Partly Cloudy / Wind": "Delno oblačno z vetrom",
	"Partly Cloudy and Windy": "Delno oblačno in vetrovno",
	"Partly Sunny": "Delno sončno",
	"Partly Sunny / Wind": "Delno sončno z vetrom",
	"Thunder": "Grmenje",
	"Thunderstorms": "Nevihta z grmenjem"
};

var lng_WundergroundStatus = {
	"Chance of a Thunderstorm": "Мožne nevihte",
	"Clear": "Jasno",
	"Clear [Night]": "Jasna noč",
	"Clear and Windy": "Jasno in vetrovno",
	"Clouds Early / Clearing Late": "Zjutraj oblačno, zvečer razjasnitve",
	"Cloudy": "Оblačno",
	"Cloudy and Windy": "Оblačno in vetrovno",
	"Cloudy / Wind": "Оblačno z vetrom",
	"Fair and Windy": "Jasno in vetrovno",
	"Few Showers": "Občasne plohe",
	"Few Showers / Wind": "Občasne plohe z vetrom",
	"Few Snow Showers": "Občasne snežne plohe",
	"Few Snow Showers / Wind": "Občasne snežne plohe z vetrom",
	"Fine": "Lepo",
	"Flurries": "Rahlo sneži",
	"Fog": "Мegla",
	"Heavy Fog": "Močna megla",
	"Heavy Rain": "Močno dežuje",
	"Heavy Rain Showers": "Močni nalivi",
	"Heavy Snow and Windy": "Močno sneženje z vetrom",
	"Heavy Snow Shower": "Močna snežna ploha",
	"Heavy Snow Shower and Windy": "Močna snežna ploha in vetrovno",
	"Heavy Snow Showers": "Močna snežna ploha",
	"Heavy Snow": "Močno sneži",
	"Heavy T-Storms": "Močna nevihta z grmljenjem",
	"Hvy.snowshower": "Močno sneži",
	"Hot / Sunny": "Vroče/Sončno",
	"Hot": "Vroče",
	"Light Rain": "Rahlo dežuje",
	"Light Rain / Freezing Rain": "Rahel dež/Leden dež",
	"Light Rain / Freezing": "Rahel dež/Mraz",
	"Light Freezing Rain": "Rahel leden dež",
	"Light Rain Shower and Windy": "Rahla dežna ploha",
	"Light snow blowing snow": "Rahel snežni metež",
	"Partly Cloudy and Windy": "Deloma oblačno in vetrovno",
	"Scattered Clouds": "Občasno oblačno",
	"Scattered Flurries": "Občasno rahel sneg",
	"Scattered Flurries / Wind": "Občasno rahel sneg z vetrom",
	"Scattered Showers": "Občasne plohe",
	"Scattered Showers / Wind": "Občasne plohe z vetrom",
	"Scattered Snow Showers": "Občasne snežne plohe",
	"Showers in the Vicinity": "Plohe",
	"Sprinkles": "Rosi",
	"Thunder in the Vicinity": "Nevihta",
	"Light Rain with Thunder": "Rahel dež z nevihto",
	"Light Snow Grains": "Rahel zrnast sneg",
	"Mostly Clear": "Pretežno jasno",
	"Mostly Cloudy": "Pretežno oblačno",
	"Mostly Cloudy / Wind": "Pretežno oblačno z vetrom",
	"Mostly Cloudy and Windy": "Pretežno oblačno Pretežno sončno",
	"Mostly Sunny": "Pretežno sončno",
	"Mostly Sunny / Wind": "Pretežno sončno/Pretežno sončno",
	"N/A": "Ni podatka",
	"Overcast": "Оblačno",
	"Partial Fog": "Delno megleno",
	"Partly Clear": "Delno jasno",
	"Partly Cloudy": "Delno oblačno",
	"Partly Cloudy / Wind": "Delno oblačno z vetrom",
	"Partly Cloudy and Windy": "Delno oblačno in vetrovno",
	"Partly Sunny": "Delno sončno",
	"Partly Sunny / Wind": "Delno sončno z vetrom",
	"Thunder": "Grmenje",
	"Thunderstorms": "Nevihta z grmenjem"
};

var lng_MSNStatus = {
	"Chance of a Thunderstorm": "Мožne nevihte",
	"Clear": "Jasno",
	"Clear [Night]": "Jasna noč",
	"Clear and Windy": "Jasno in vetrovno",
	"Clouds Early / Clearing Late": "Zjutraj oblačno, zvečer razjasnitve",
	"Cloudy": "Оblačno",
	"Cloudy and Windy": "Оblačno in vetrovno",
	"Cloudy / Wind": "Оblačno z vetrom",
	"Fair and Windy": "Jasno in vetrovno",
	"Few Showers": "Občasne plohe",
	"Few Showers / Wind": "Občasne plohe z vetrom",
	"Few Snow Showers": "Občasne snežne plohe",
	"Few Snow Showers / Wind": "Občasne snežne plohe z vetrom",
	"Fine": "Lepo",
	"Flurries": "Rahlo sneži",
	"Fog": "Мegla",
	"Heavy Fog": "Močna megla",
	"Heavy Rain": "Močno dežuje",
	"Heavy Rain Showers": "Močni nalivi",
	"Heavy Snow and Windy": "Močno sneženje z vetrom",
	"Heavy Snow Shower": "Močna snežna ploha",
	"Heavy Snow Shower and Windy": "Močna snežna ploha in vetrovno",
	"Heavy Snow Showers": "Močna snežna ploha",
	"Heavy Snow": "Močno sneži",
	"Heavy T-Storms": "Močna nevihta z grmljenjem",
	"Hvy.snowshower": "Močno sneži",
	"Hot / Sunny": "Vroče/Sončno",
	"Hot": "Vroče",
	"Light Rain": "Rahlo dežuje",
	"Light Rain / Freezing Rain": "Rahel dež/Leden dež",
	"Light Rain / Freezing": "Rahel dež/Mraz",
	"Light Freezing Rain": "Rahel leden dež",
	"Light Rain Shower and Windy": "Rahla dežna ploha",
	"Light snow blowing snow": "Rahel snežni metež",
	"Partly Cloudy and Windy": "Deloma oblačno in vetrovno",
	"Scattered Clouds": "Občasno oblačno",
	"Scattered Flurries": "Občasno rahel sneg",
	"Scattered Flurries / Wind": "Občasno rahel sneg z vetrom",
	"Scattered Showers": "Občasne plohe",
	"Scattered Showers / Wind": "Občasne plohe z vetrom",
	"Scattered Snow Showers": "Občasne snežne plohe",
	"Showers in the Vicinity": "Plohe",
	"Sprinkles": "Rosi",
	"Thunder in the Vicinity": "Nevihta",
	"Light Rain with Thunder": "Rahel dež z nevihto",
	"Light Snow Grains": "Rahel zrnast sneg",
	"Mostly Clear": "Pretežno jasno",
	"Mostly Cloudy": "Pretežno oblačno",
	"Mostly Cloudy / Wind": "Pretežno oblačno z vetrom",
	"Mostly Cloudy and Windy": "Pretežno oblačno Pretežno sončno",
	"Mostly Sunny": "Pretežno sončno",
	"Mostly Sunny / Wind": "Pretežno sončno/Pretežno sončno",
	"N/A": "Ni podatka",
	"Overcast": "Оblačno",
	"Partial Fog": "Delno megleno",
	"Partly Clear": "Delno jasno",
	"Partly Cloudy": "Delno oblačno",
	"Partly Cloudy / Wind": "Delno oblačno z vetrom",
	"Partly Cloudy and Windy": "Delno oblačno in vetrovno",
	"Partly Sunny": "Delno sončno",
	"Partly Sunny / Wind": "Delno sončno z vetrom",
	"Thunder": "Grmenje",
	"Thunderstorms": "Nevihta z grmenjem"
};

var lng_WeatherEyeStatus = {
	"Chance of a Thunderstorm": "Мožne nevihte",
	"Clear": "Jasno",
	"Clear [Night]": "Jasna noč",
	"Clear and Windy": "Jasno in vetrovno",
	"Clouds Early / Clearing Late": "Zjutraj oblačno, zvečer razjasnitve",
	"Cloudy": "Оblačno",
	"Cloudy and Windy": "Оblačno in vetrovno",
	"Cloudy / Wind": "Оblačno z vetrom",
	"Fair and Windy": "Jasno in vetrovno",
	"Few Showers": "Občasne plohe",
	"Few Showers / Wind": "Občasne plohe z vetrom",
	"Few Snow Showers": "Občasne snežne plohe",
	"Few Snow Showers / Wind": "Občasne snežne plohe z vetrom",
	"Fine": "Lepo",
	"Flurries": "Rahlo sneži",
	"Fog": "Мegla",
	"Heavy Fog": "Močna megla",
	"Heavy Rain": "Močno dežuje",
	"Heavy Rain Showers": "Močni nalivi",
	"Heavy Snow and Windy": "Močno sneženje z vetrom",
	"Heavy Snow Shower": "Močna snežna ploha",
	"Heavy Snow Shower and Windy": "Močna snežna ploha in vetrovno",
	"Heavy Snow Showers": "Močna snežna ploha",
	"Heavy Snow": "Močno sneži",
	"Heavy T-Storms": "Močna nevihta z grmljenjem",
	"Hvy.snowshower": "Močno sneži",
	"Hot / Sunny": "Vroče/Sončno",
	"Hot": "Vroče",
	"Light Rain": "Rahlo dežuje",
	"Light Rain / Freezing Rain": "Rahel dež/Leden dež",
	"Light Rain / Freezing": "Rahel dež/Mraz",
	"Light Freezing Rain": "Rahel leden dež",
	"Light Rain Shower and Windy": "Rahla dežna ploha",
	"Light snow blowing snow": "Rahel snežni metež",
	"Partly Cloudy and Windy": "Deloma oblačno in vetrovno",
	"Scattered Clouds": "Občasno oblačno",
	"Scattered Flurries": "Občasno rahel sneg",
	"Scattered Flurries / Wind": "Občasno rahel sneg z vetrom",
	"Scattered Showers": "Občasne plohe",
	"Scattered Showers / Wind": "Občasne plohe z vetrom",
	"Scattered Snow Showers": "Občasne snežne plohe",
	"Showers in the Vicinity": "Plohe",
	"Sprinkles": "Rosi",
	"Thunder in the Vicinity": "Nevihta",
	"Light Rain with Thunder": "Rahel dež z nevihto",
	"Light Snow Grains": "Rahel zrnast sneg",
	"Mostly Clear": "Pretežno jasno",
	"Mostly Cloudy": "Pretežno oblačno",
	"Mostly Cloudy / Wind": "Pretežno oblačno z vetrom",
	"Mostly Cloudy and Windy": "Pretežno oblačno Pretežno sončno",
	"Mostly Sunny": "Pretežno sončno",
	"Mostly Sunny / Wind": "Pretežno sončno/Pretežno sončno",
	"N/A": "Ni podatka",
	"Overcast": "Оblačno",
	"Partial Fog": "Delno megleno",
	"Partly Clear": "Delno jasno",
	"Partly Cloudy": "Delno oblačno",
	"Partly Cloudy / Wind": "Delno oblačno z vetrom",
	"Partly Cloudy and Windy": "Delno oblačno in vetrovno",
	"Partly Sunny": "Delno sončno",
	"Partly Sunny / Wind": "Delno sončno z vetrom",
	"Thunder": "Grmenje",
	"Thunderstorms": "Nevihta z grmenjem"
};

var lng_WeatherBugStatus = {
	"Chance of a Thunderstorm": "Мožne nevihte",
	"Clear": "Jasno",
	"Clear [Night]": "Jasna noč",
	"Clear and Windy": "Jasno in vetrovno",
	"Clouds Early / Clearing Late": "Zjutraj oblačno, zvečer razjasnitve",
	"Cloudy": "Оblačno",
	"Cloudy and Windy": "Оblačno in vetrovno",
	"Cloudy / Wind": "Оblačno z vetrom",
	"Fair and Windy": "Jasno in vetrovno",
	"Few Showers": "Občasne plohe",
	"Few Showers / Wind": "Občasne plohe z vetrom",
	"Few Snow Showers": "Občasne snežne plohe",
	"Few Snow Showers / Wind": "Občasne snežne plohe z vetrom",
	"Fine": "Lepo",
	"Flurries": "Rahlo sneži",
	"Fog": "Мegla",
	"Heavy Fog": "Močna megla",
	"Heavy Rain": "Močno dežuje",
	"Heavy Rain Showers": "Močni nalivi",
	"Heavy Snow and Windy": "Močno sneženje z vetrom",
	"Heavy Snow Shower": "Močna snežna ploha",
	"Heavy Snow Shower and Windy": "Močna snežna ploha in vetrovno",
	"Heavy Snow Showers": "Močna snežna ploha",
	"Heavy Snow": "Močno sneži",
	"Heavy T-Storms": "Močna nevihta z grmljenjem",
	"Hvy.snowshower": "Močno sneži",
	"Hot / Sunny": "Vroče/Sončno",
	"Hot": "Vroče",
	"Light Rain": "Rahlo dežuje",
	"Light Rain / Freezing Rain": "Rahel dež/Leden dež",
	"Light Rain / Freezing": "Rahel dež/Mraz",
	"Light Freezing Rain": "Rahel leden dež",
	"Light Rain Shower and Windy": "Rahla dežna ploha",
	"Light snow blowing snow": "Rahel snežni metež",
	"Partly Cloudy and Windy": "Deloma oblačno in vetrovno",
	"Scattered Clouds": "Občasno oblačno",
	"Scattered Flurries": "Občasno rahel sneg",
	"Scattered Flurries / Wind": "Občasno rahel sneg z vetrom",
	"Scattered Showers": "Občasne plohe",
	"Scattered Showers / Wind": "Občasne plohe z vetrom",
	"Scattered Snow Showers": "Občasne snežne plohe",
	"Showers in the Vicinity": "Plohe",
	"Sprinkles": "Rosi",
	"Thunder in the Vicinity": "Nevihta",
	"Light Rain with Thunder": "Rahel dež z nevihto",
	"Light Snow Grains": "Rahel zrnast sneg",
	"Mostly Clear": "Pretežno jasno",
	"Mostly Cloudy": "Pretežno oblačno",
	"Mostly Cloudy / Wind": "Pretežno oblačno z vetrom",
	"Mostly Cloudy and Windy": "Pretežno oblačno Pretežno sončno",
	"Mostly Sunny": "Pretežno sončno",
	"Mostly Sunny / Wind": "Pretežno sončno/Pretežno sončno",
	"N/A": "Ni podatka",
	"Overcast": "Оblačno",
	"Partial Fog": "Delno megleno",
	"Partly Clear": "Delno jasno",
	"Partly Cloudy": "Delno oblačno",
	"Partly Cloudy / Wind": "Delno oblačno z vetrom",
	"Partly Cloudy and Windy": "Delno oblačno in vetrovno",
	"Partly Sunny": "Delno sončno",
	"Partly Sunny / Wind": "Delno sončno z vetrom",
	"Thunder": "Grmenje",
	"Thunderstorms": "Nevihta z grmenjem",
	"30% Chance of Flurry": "30% možnosti rahlega snega",
        "30% Chance of Frozen Mix": "30% možnosti dežja in snega",
        "30% Chance Rain Shower": "30% мožnosti dežne plohe",
        "30% Chance of Storms": "30% мožnosti nevihte",
        "30% Chance of Light Snow": "30% možnosti rahlega snega",
        "30% Chance of Rain": "30% možnosti dežja",  
        "30% Chance of Drizzle": "30% мožnosti pršenja",
        "40% Chance Rain Shower": "40% мožnosti dežne plohe",
        "40% Chance of Flurry": "40% možnosti rahlega snega",
        "40% Chance of Frozen Mix": "40% možnosti dežja in snega",
        "40% Chance of Light Snow": "40% možnosti rahlega snega",
        "40% Chance of Storms": "40% мožnosti nevihte",
        "40% Chance of Rain": "40% možnosti dežja",  
        "40% Chance of Drizzle": "40% мožnosti pršenja",
        "50% Chance of Storms": "50% мožnosti nevihte",
        "50% Chance of Flurry": "50% možnosti rahlega snega",
        "50% Chance of Light Snow": "50% možnosti rahlega snega",
        "50% Chance of Rain": "50% možnosti dežja",  
        "50% Chance Rain Shower": "50% мožnosti dežne plohe",
        "50% Chance of Frozen Mix": "50% možnosti dežja in snega",
        "50% Chance of Drizzle": "50% мožnosti pršenja"
};

var lng_nodata = "N/A";


var lng_DayOfWeek = {
	Sunday: "Nedelja",
	Monday: "Ponedeljek",
	Tuesday: "Torek",
	Wednesday: "Sreda",
	Thursday: "Četrtek",
	Friday: "Petek",
	Saturday: "Sobota"
};

var lng_Stats = {
	pressure: "Zračni tlak",
	pressuretrend: "Zračni tlak↑↓",
	wind: "Veter",
	gust: "Sunki vetra",
	thunderstorm: "Nevihta",
	precipitation: "Padavine",
	visibility: "Vidljivost",
	humidity: "Vlažnost",
	flik: "Temperatura",
	nothing: "Prazno",
	sunrise: "Sončni vzhod↑",
	sunset: "Sončni zahod↓",
	uvindex: "UV-Indeks",
	uvlevel: "UV-Nivo",
	moonterminator: "Luna",
	latitude: "Zemlje. širina",
	longitude: "Zemlje. dolžina",
	moonrise: "Lunin vzhod↑",
	moonset: "Lunin zahod↓",
	watertemp: "т°vode",
	dewpoint: "Točka rosišča",
	airquality: "Kvaliteta zraka",
	localtime: "Lokalni čas"
};

var pressure_Stats = {
	falling: "<FONT COLOR='#4169E1'>v padanju</FONT>",
	decreasing: "<FONT COLOR='#4169E1'>v padanju</FONT>",
	rising: "<FONT COLOR='#FA8072'>v naraščanju</FONT>",
	increasing: "<FONT COLOR='#FA8072'>v naraščanju</FONT>",
	steady: "nespremenljiv"
};

var uv_Stats = {
	Low: "<FONT COLOR='#FFFFFF'>Nizek</FONT>",
	Moderate: "<FONT COLOR='#fcf900'>Zmeren</FONT>",
	High: "<FONT COLOR='#fc8800'>Visok</FONT>",
	Extreme: "<FONT COLOR='#fc0303'>Ekstremen</FONT>"
};


var winddirection_Stats = {
	N: "<FONT COLOR='#FA8072'>S</FONT>",
	North: "<FONT COLOR='#FA8072'>Sever</FONT>",
	NNE: "<FONT COLOR='#FA8072'>SSV</FONT>",
	NE: "<FONT COLOR='#FFD700'>SV</FONT>",
	ENE: "<FONT COLOR='#FFD700'>VSV</FONT>",
	E: "<FONT COLOR='#00FF00'>V</FONT>",
	East: "<FONT COLOR='#00FF00'>Vzhod</FONT>",
	ESE: "<FONT COLOR='#00FF00'>VJV</FONT>",
	SE: "<FONT COLOR='#00FF00'>ЈV</FONT>",
	SSE: "<FONT COLOR='#00FF00'>ЈЈV</FONT>",
	S: "<FONT COLOR='#FF3030'>Ј</FONT>",
	South: "<FONT COLOR='#FF3030'>Јug</FONT>",
	SSW: "<FONT COLOR='#FF3030'>ЈЈZ</FONT>",
	SW: "<FONT COLOR='#FFD700'>ЈZ</FONT>",
	WSW: "<FONT COLOR='#FFD700'>ZЈZ</FONT>",
	W: "<FONT COLOR='#FFFFFF'>Z</FONT>",
	West: "<FONT COLOR='#FFFFFF'>Zahod</FONT>",
	WNW: "<FONT COLOR='#FFFFFF'>ZSZ</FONT>",
	NW: "<FONT COLOR='#FFFFFF'>SZ</FONT>",
	NNW: "<FONT COLOR='#FFFFFF'>SSZ</FONT>"
};

var moon_Stats = {
	New: "Prazna luna-Mlaj",
	"Waxing Crescent": "Prvi krajec",
	"First Quarter": "Prva četrtina",
	"Waxing Gibbous": "Naraščajoča luna",
	Full: "Polna luna-Ščip",
	"Waning Gibbous": "Upadajoča luna",
	"Last Quarter": "Zadnja četrtina",
	"Waning Crescent": "Zadnji krajec",
	Darkened: "Brez lune"
};

var moon_Stats_full = {
	New: "New",
	"Waxing Crescent": "Waxing Crescent",
	"First Quarter": "First Quarter",
	"Waxing Gibbous": "Waxing Gibbous",
	Full: "Full",
	"Waning Gibbous": "Waning Gibbous",
	"Last Quarter": "Last Quarter",
	"Waning Crescent": "Waning Crescent",
	Darkened: "Darkened"
};

var lng_Units = {
	"C": "C",
	"F": "F",
	"km": "km",
	"km/h": "km/h",
	"m/s": "m/s",
	"mb": "mb",
	"mi": "mi",
	"mph": "mph",
	"in": "in",
	"cm": "cm",
	"mm": "mm",
	"kPa": "kPa"
};



var lng_Countries = {
	"Serbia": "Srbija",
        "Сербия": "Srbija",
        "Yugoslavia": "Srbija",
	"Srbija": "Srbija",
        "Montenegro": "Črna gora",
	"Croatia": "Hrvaška",
	"Bosnia And Herzegovina": "Bosna in Hercegovina",        
        "Greece": "Grčija",
        "Italy": "Italija",
        "Slovenia": "Slovenija",
	"United Kingdom": "Velika Britanija",
	"United States": "Združene države Amerike"
};

var lng_Cities = {
	"Moscow": "Moscow"
};

var lng_Month = {
	Jan: "Januar",
	Feb: "Februar",
	Mar: "Marec",
	Apr: "April",
	May: "Maj",
	Jun: "Junij",
	Jul: "Julij",
	Aug: "Avgust",
	Sep: "September",
	Oct: "Oktober",
	Nov: "November",
	Dec: "December"
};

var lng_Month_Short = {
	Jan: "Jan",
	Feb: "Feb",
	Mar: "Mar",
	Apr: "Apr",
	May: "Maj",
	Jun: "Jun",
	Jul: "Jul",
	Aug: "Avg",
	Sep: "Sep",
	Oct: "Okt",
	Nov: "Nov",
	Dec: "Dec"
};

var lng_Month_full = {
	January: "Januar",
	February: "Februar",
	March: "Marec",
	April: "April",
	May: "Maj",
	June: "Junij",
	July: "Julij",
	August: "Avgust",
	September: "September",
	October: "Oktober",
	November: "November",
	December: "December"
};

