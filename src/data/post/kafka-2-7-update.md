---
title: 'Was Sie über Kafka 2.7 wissen sollten'
publishDate: 2021-07-08T10:00:00Z
categories: + "aws-cloud"
coverImage: 'Kafka.png'
---

[![Thinkport Logo](images/Logo_horizontral_new-ovavzp5ztqmosy1yz1jrwr9fv5swhtoc0bky3tkc3g.png 'Logo Bright Colours')](https://thinkport.digital)[![Thinkport Logo](images/Logo_horizontral_new-ovavzp5ztqmosy1yz1jrwr9fv5swhtoc0bky3tkc3g.png 'Logo Bright Colours')](https://thinkport.digital)

Apache Kafka 2.7

# Die wichtigsten Neuerungen in Kafka 2.7

[](#linksection)

##### _Contributor: Wladislaw Ponomarenko_

In diesem Blogbeitrag werden wir auf die, unserer Meinung nach, wichtigsten Neuerungen in Kafka 2.7 eingehen. Doch zuerst einmal was ist Apache Kafka? Bei Kafka handelt es sich um eine Open Source Event Streaming Plattform. Die hohe Verbreitung von Kafka lässt sich darauf zurückführen, dass die Anzahl der möglichen Nachrichten Zustellungen theoretisch nur durch das Netzwerk limitiert sind. Zudem wird eine hohe Skalierbarkeit geboten und die Möglichkeit Daten dezentral zu speichern.   
Die Neuerungen werden von der Open Source Gemeinschaft organisiert und verwaltet. Hierfür wird der Begriff “Kafka Improvement Proposal”, kurz „KIP“ genutzt (dt. Vorschlag zu Verbesserung von Kafka). In der Version 2.7 gab es zahlreich Neuerungen, die wir im Folgenden in drei Kategorien unterteilt haben.

### **Broker, Producer und Consumer** 

##### KIP-654: Nicht fatale Fehlermeldung für abgebrochene Transaktionen mit ausstehenden Daten. 

Wenn vor dem Update im Java-Client-Producer versucht wurde, eine Transaktion mit ausstehenden Daten abzubrechen, wurde die fatale Fehlermeldung KafkaException("Failing batch since transaction was aborted") ausgegeben. Dieser Zustand ist jedoch zulässig. Mit der Fehlermeldung soll darauf aufmerksam gemacht werden, dass die Datensätze nicht mehr gesendet werden. Die Lösung, die für dieses Problem gewählt wurde, ist das Werfen einer anderen Fehlermeldung. Diese macht den Benutzer darauf aufmerksam, dass die Transaktion abgebrochen wurde. Die Fehlermeldung, die geworfen werden soll, ist die TransactionAbortedException.

##### Welche Auswirkung haben diese Änderungen?

Falls alles schon implementiert ist, wird der Benutzer eine neue Fehlermeldung sehen, die weiter hin abgefangen wird, da es sich um eine Erweiterung der „KafkaException“ handelt. Hier kann dann der Benutzer entscheiden, wie mit dem Fehler umzugehen ist und gegebenenfalls die Daten erneut senden. 

##### KIP-651: Unterstützung des PEM-Formates für SSL-Zertifikate und private Schlüssel. 

Vor dem Update hat Kafka nur Filebasierte Schlüssel und trust stores unterstützt. Nach dem Update ist es möglich PEM Dateien als Wert für einen Schlüssel zu übergeben. PEM steht für Privacy-Enhanced Mail und war ehemals als E-Mail Standard gedacht. Heute ist es ein Standardformat für die Speicherung und Verteilung von kryptografischen Schlüsseln und Zertifikaten. 

##### Welche Auswirkung haben diese Änderungen?

Es werden weiterhin dateibasierte Verschlüsselungen und trust stores unterstützt. Die neuen Änderungen werden erst gültig, wenn diese explizit konfiguriert werden. Zu beachten ist, dass eine Fehlermeldung geworfen wird, sobald Daten und PEM-Werte gleichzeitig konfiguriert werden. 

##### KIP-612: Begrenzung der Verbindungsherstellungsrate bei Brokern.

Das Erstellen einer neuen Verbindung bringt Verwaltungsdaten mit sich. Das Problem hierbei ist, dass selbst bei gut funktionierenden Clients vermehrt neue Verbindungen auftreten können. Ein Beispiel hierfür wäre das Einsetzen einer neuen Anwendung, in der sich eine große Anzahl an Clients gleichzeitig hochfährt und eine Verbindung erstellt. Alternativ Clients, die für jede ausgeführte Operation eine neue Verbindung aufbauen Dadurch, dass der Broker dann diese Verwaltungsdaten handhabt, wird die Leistung blockiert, was wiederum zu einer höheren Latenz führen kann. Um dieses Problem zu lösen, wird die Möglichkeit implementiert, ein Limit für mögliche neu Verbindungen pro IP-Adresse zu setzen und ein Limit wie viele neu Verbindungen der Broker zulässt.

##### Welche Auswirkung haben diese Änderungen?

Diese Änderung hat keine Auswirkung auf bereits konfigurierte Systeme, denn um in Funktion zu treten, müssen die Limitierungen konfiguriert werden. Um die Rate zu limitieren, muss einfach der folgende Befehl in die Einstellungen hinzugefügt werden:  
max.connection.creation.rate \[0, ...\]. Der Standard Wert beträgt 2147483647. 

##### KIP-431: AUSGABEERWEITERUNG BEI DEM CONSOLECONSUMER. 

Der Kafka ConsoleConsumer ist ein sehr wichtiges Debugging-Tool in Kafka. Allerdings konnte es vor dem Update keinen Offset, Partition und Header eines Kafka-Datensatzes ausgeben. Hierfür musste man sich mit dem Broker Host direkt verbinden oder eine andere Anwendung dafür verwenden. Dieses Problem wurde gelöst, in dem der ConsoleConsumer um die folgenden Eigenschaften erweitert wurde:  
print.offset  
print.headers  
header.separator  
headers.deserializer  
null.literal 

##### WELCHE AUSWIRKUNG HABEN DIESE ÄNDERUNGEN? 

Vor dem Update gab es die Eigenschaft „print.partition=true“ diese war aber nicht dokumentiert und die Ausgabe war „schlüssel|wert|0“, nach dem Update kommt noch der Präfix „Partition“ hinzu. Die Ausgabe sieht danach wie folgt aus: „Partition:0|schlüssel|wert“. Wenn „print.partion“ vohrer nicht benutzt wurde, muss beim Updaten nichts beachtet werden, da lediglich neue Einstellungsmöglichkeiten dazu gekommen sind. 

##### Connect

KIP-632 Hinzufügen von dem “DirectoryConfigProvider”  
Hier wird die Kafka ConfigProvicer Schnittstelle erweitert und bietet nun die Möglichkeit Schlüssel in Dateisystemen zu hinterlegen.  
Vorher gab es einen FileConfigProvier, der Schlüssel in einer Properties Datei verwaltet hat. Dies kann jedoch zu Problemen mit zum Beispiel Kubernetes führen, da hier jedes Secret-Objekt mehrere Schlüssel beinhalten kann. Jedoch ist es möglich, sich diese einzeln in einem Verzeichnis auflisten zu lassen.

##### Welche Auswirkung haben diese Änderungen?

Diese Änderung ist rückwärts kompatibel und kann wie folgt konfiguriert werden ssl.keystore.password=${directory:/Pfad-zum-Schlüssel:schlüssel1}

##### Kafka Streams

KIP-617: Rückwärts Iteration durch Zustandsspeicher.  
Das Abrufen eines Bereichs von Datensätzen aus Kafka Streams State Stores erfolgt durch einen iterator: fetch(K Schlüssel, long von, long bis). Hier wird die Reihenfolge vom frühsten Eintrag bis zum letzten garantiert. Dies kann aber ineffizient sein, wenn man zum Beispiel nur die Letzten x Einträge benötigt. Es wird die Option eingefügt, Datensätze in umgekehrter Reihenfolge, von dem aktuellen Eintrag bis hin zum ältesten, zu iterieren. Dies wird erreicht, indem man den Zustand speichert. Dadurch kann man deutlich effizienter nach letzten Einträgen suchen.

##### Welche Auswirkung haben diese Änderungen?

Es gibt Standardimplementierungen wodurch bereits laufende Systeme nicht betroffen sind. Benutzt werden kann es durch eine Implementierung der reverseRange Funktion im ReadOnlyKeyValueStore Interface.

##### KIP-613: Hinzufügen von End-to-End-Latenz Metriken zu Kafka-Streams.

Vor dem Update war es nur schwer möglich, die tatsächliche End-zu-End-Latenz eines Datensatzes, der durch einen Stream fließt, zu messen. Dies erschwerte das Entwickeln von Echtzeitanwendungen, da man nicht genau sagen konnte, wie lange ein Event verarbeitet wird. Diese Neuerung macht es möglich, die Latenz in Form von Metriken offen zu legen und darauf basierend mit der richtige Design Entscheidung die Latenz zu begrenzen. Hierfür sollen folgende Metriken hinzugefügt und auf Task Niveau bereitgestellt werden:  
record-e2e-latency-min \[ms\]  
record-e2e-latency-max \[ms\]  
record-e2e-latency-avg \[ms\]

##### Welche Auswirkung haben diese Änderungen?

Da es sich um die Implementierung einer Erweiterung handelt, sollte diese vollständig kompatibel sein.

##### KIP-450 Sliding Window Aggregation in DSL (Domain Specific Language).

Dieses KIP beschäftigt sich mit der Erweiterung des Sliding-Windows durch Aggregation. Zuvor gab es diese Möglichkeiten nur für den Tumbling- und Hopping-Window. Windowing ist eine Zeit basierte Form für das Gruppieren von Einträgen. Hopping-Window mit kleiner Vorlaufzeit ähnelt einem Sliding-Window. Jedoch enthält dieser redundante Daten, da die Fenster sich an vielen Stellen überschneiden. Beim Sliding-Window wird nur das Fenster berechnet und somit kommt es zu keinen Überschneidungen, weswegen dieses Verfahren deutlich effizienter ist.

##### Welche Auswirkung haben diese Änderungen?

Da es sich um die Implementierung einer Erweiterung handelt, sollte diese vollständig kompatibel sein. Eine mögliche Implementierung könnte wie folgt aussehen:   
stream  
.groupByKey()  
.windowedBy(SlidingWindows.withTimeDifferenceAndGrace(ofSeconds(x), ofSeconds(x))  
.toStream()

[Linkedin](https://www.linkedin.com/company/11759873) [Instagram](https://www.instagram.com/thinkport/) [Youtube](https://www.youtube.com/channel/UCnke3WYRT6bxuMK2t4jw2qQ) [Envelope](mailto:tdrechsel@thinkport.digital)

 ***Thinkport** ist ein dynamisches und stetig wachsendes Cloud-Beratungsunternehmen,  mit dem Ziel innovative Technologien und Lösungen im Bereich Cloud Computing zu entwickeln. Als zertifizierter Microsoft Gold Platform Partner arbeiten wir eng mit Microsoft, im Azure-Cloud-Umfeld, zusammen und verfügen auch über zertifizierte Expertise mit Amazon Web Services.*

*Unsere Stärken und unser Know-how liegen in den Bereichen Multi-Cloud, Data Lakes, Big Data, AI und Event-Driven Architectures (Hadoop, Kafka, Solace) sowie Terraform. Um einen weiteren Einblick über unsere Dienstleistungen zu bekommen, besuchen Sie gerne unsere Website und die neu aktualisierte [Workshop Seite](https://thinkport.digital/cloud-excellence-workshops/).* 

## [Weitere Beiträge](https://thinkport.digital/blog)

### [Home Office wegen Covid-19? So kann AWS helfen](https://thinkport.digital/home-office-covid-19-aws-losungen/ 'Home Office wegen Covid-19? So kann AWS helfen')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [Home Office wegen Covid-19? So kann AWS helfen](https://thinkport.digital/home-office-covid-19-aws-losungen/ 'Home Office wegen Covid-19? So kann AWS helfen')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [Neue AWS-Funktionen für Speicher- und Dateisysteme](https://thinkport.digital/neue-aws-funktionen-fur-speicher-und-dateisysteme/ 'Neue AWS-Funktionen für Speicher- und Dateisysteme')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [Neue AWS-Funktionen für Speicher- und Dateisysteme](https://thinkport.digital/neue-aws-funktionen-fur-speicher-und-dateisysteme/ 'Neue AWS-Funktionen für Speicher- und Dateisysteme')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

[![BDHomeBanner](images/BDHomeBanner-e1535112378878.png 'BDHomeBanner')](https://thinkport.digital/10-big-data-trends-to-watch-in-2018/)

### [10 Big Data Trends to watch in 2018](https://thinkport.digital/10-big-data-trends-to-watch-in-2018/ '10 Big Data Trends to watch in 2018')

[Big Data](https://thinkport.digital/category/big-data/)

### [10 Big Data Trends to watch in 2018](https://thinkport.digital/10-big-data-trends-to-watch-in-2018/ '10 Big Data Trends to watch in 2018')

[Big Data](https://thinkport.digital/category/big-data/)

[![Partnership Announcement_Thinkport (2)](images/Partnership-Announcement_Thinkport-2-1024x696.png 'Partnership Announcement_Thinkport (2)')](https://thinkport.digital/thinkport-solace-partnership/)

### [Thinkport and Solace announce Partnership](https://thinkport.digital/thinkport-solace-partnership/ 'Thinkport and Solace announce Partnership')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [Thinkport and Solace announce Partnership](https://thinkport.digital/thinkport-solace-partnership/ 'Thinkport and Solace announce Partnership')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

[![GreatUI](images/Kopie-von-Hack-with.png 'GreatUI')](https://thinkport.digital/7-golden-rules-for-creating-great-ui/)

### [7 Golden Rules for Creating Great UI](https://thinkport.digital/7-golden-rules-for-creating-great-ui/ '7 Golden Rules for Creating Great UI')

[Frontend](https://thinkport.digital/category/frontend/)

### [7 Golden Rules for Creating Great UI](https://thinkport.digital/7-golden-rules-for-creating-great-ui/ '7 Golden Rules for Creating Great UI')

[Frontend](https://thinkport.digital/category/frontend/)

[![OpenMaps](images/OpenMaps-1024x696.png 'picture blog post testdata open maps')](https://thinkport.digital/testdaten-generieren-mithilfe-von-openmaps/)

### [Testdaten generieren mithilfe von Openmaps](https://thinkport.digital/testdaten-generieren-mithilfe-von-openmaps/ 'Testdaten generieren mithilfe von Openmaps')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [Testdaten generieren mithilfe von Openmaps](https://thinkport.digital/testdaten-generieren-mithilfe-von-openmaps/ 'Testdaten generieren mithilfe von Openmaps')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

## Blog Kurator

![portrait Christina](images/Christina.png)

### Christina Friede

### Business Development

## Email:

## [cfriede@thinkport.digital](mailto:cfriede@thinkport.digital)

- [](https://www.linkedin.com/in/christina-friede-2a6426168/)
