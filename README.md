SmartOrder
===============================

Kurzbeschreibung
----------------

Bei SmartOrder handelt es sich um eine lokale Bestellplattform. 

Kunden Können über die Kundenansicht Artikel Bestellen, welche anschließend auf die auf eine DB geladen. 
Von dort werden sich wiederrum von der Küchenansicht geladen. Damit diese die Bestellungen abarbeiten kann.

Start der Anwendung
-----------------------
Die App nutzt XAMPP um einen Lokalen Server für die Datenbank laufen zu lassen. 
Hierzu muss der SmartOrder Order in den entsprechenden htdocs Ordner des Programmes kopiert werden bsp:
 D:\xampp\htdocs\SmartOrder
 Anschließend muss der Apache und der MySQL Server gestartet werden. 
 
 Sobald die Server laufen kann über die den localhost auf die Anwendung zugegriffen werden. 
 
 Damit die Bestellten Produkte auch gespeichert werden können müssen Sie nun die db_order.sql in das MySQL importieren.
 
 Da die Kundenansicht die index.html ist kann man diese nun unter 
  localhost/SmartOrder2/src/
 erreichen. 
 
 Wenn man stattdessen beispielsweise in die Küchenansicht möchte erreicht man diese unter:
  localhost/SmartOrder2/src/küche0.html
  
  Alle Dateien sind aus dem Localhost heraus zu Öffnen, nur so kann die Navigation zwischen den Küchenanischten garantiert werden.
  z.B. localhost/Smartorder/src/anmeldung.html 

 


