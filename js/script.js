function Telefon(marka, cena, kolor, ram, rez){
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.ram = ram;
	this.rez = rez;
}

Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor telefonu " + this.kolor +  
                ", a cena telefonu: " +  this.cena + ", pamięć ram " + this.ram + ", rodzielczość ekranu " + this.rez + ".");
}

var Iphone = new Telefon('Iphone I6', '3420zł', 'zloty', '1GB', '728x1024');
var Samsung = new Telefon('Samsung Galaxy S8', '3299zł', 'czarny', '4GB', '1024x1280');
var Xiaoami =  new Telefon('Xiaoami Mi8', '599$', 'Biały', '6GB', '2024x4028');

Xiaoami.printInfo();