function Telefon(brand, price, color, ram, rez){
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.ram = ram;
	this.rez = rez;
}

Telefon.prototype.printInfo = function() {
      console.log("Marka telefonu " + this.brand
    			+ ", kolor telefonu " + this.color
    			+ ", cena telefonu: " +  this.price
    			+ ", pamięć ram " + this.ram
    			+ ", rodzielczość ekranu " + this.rez
    			+ ".");
}

var Iphone = new Telefon('Iphone I6','3420zł', 
						'zloty', '1GB', '728x1024');
var Samsung = new Telefon('Samsung Galaxy S8', '3299zł',
						'czarny', '4GB', '1024x1280');
var Xiaoami =  new Telefon('Xiaoami Mi8', '599$',
						'Biały', '6GB', '2024x4028');
Xiaoami.printInfo();