---
title: "Neue AWS-Funktionen für Speicher- und Dateisysteme"
publishDate: 2020-03-27T10:00:00Z
categories: 
  + "aws-cloud"
coverImage: "neu.png"
---

 [![Thinkport Logo](images/Logo_horizontral_new.png)](https://thinkport.digital)[![Thinkport Logo](images/Logo_horizontral_new.png)](https://thinkport.digital)

## AWS Innovationen

## CLOUD amazon web services

# Neue Funktionen für Speicher- und Dateisysteme

[Linkedin](https://www.linkedin.com/company/11759873) [Instagram](https://www.instagram.com/thinkport/) [Youtube](https://www.youtube.com/channel/UCnke3WYRT6bxuMK2t4jw2qQ) [Envelope](mailto:tdrechsel@thinkport.digital)[](#linksection)

**Vor, während und nach AWS re: Invent 2019 kündigte Amazon Web Services (AWS) zahlreiche Innovationen bei seinen Speicherdiensten an. Bei Innovationen geht es um Sicherheit, Compliance, Effizienz und Support. Derzeit profitieren auch Amazon FSx für Windows und Lustre von zahlreichen Erweiterungen.**

Der S3 RTC-Dienst (Amazon S3 Replication Time Control) ist eine neue Funktion in S3 Replication, die eine vorhersehbare Replikationsdauer basierend auf einem Service Level Agreement (SLA) bietet. S3 RTC unterstützt Kunden bei der Erfüllung von Geschäfts- oder Compliance-Anforderungen für die Datenreplikation und ermöglicht eine transparente Replikation mit neuen Amazon CloudWatch-Metriken. „Das ist wichtig unter anderem für die Einhaltung von Recovery Point Objectives \[[RPO](https://www.storage-insider.de/was-sagt-mir-die-gleichung-rpo-0-a-577352/)\], wenn ein [Failover](https://www.storage-insider.de/was-ist-ein-failover-a-816808/) auf eine andere Region erfolgen soll oder Daten wiederhergestellt werden müssen“, erläutert Michael Hanisch, Technologieexperte bei AWS Deutschland.

Laut AWS verwenden Kunden den S3-Replikationsdienst, um Milliarden von Objekten aus Repositorys in derselben oder einer anderen Region zu kopieren. "Mit der S3-Replikationszeitsteuerung können 99, 9 Prozent der Objekte innerhalb von 15 Minuten nach dem Laden kopiert werden, und die meisten neuen Objekte werden in Sekunden repliziert", fügt Hanisch hinzu. S3 RTC bietet auch S3-Replikationsmetriken (über CloudWatch), mit denen Kunden die Zeit bis zur Replikation sowie die Gesamtzahl und Größe der zu replizierenden Objekte verfolgen können. „Wir haben übrigens auch die Preise für die Synchronisation mit AWS DataSync um 68 Prozent gesenkt“, so Hanisch. AWS DataSync kann auch zum Replizieren von Daten zwischen Gebietsschemas und AWS verwendet werden. AWS Access Analyzer für S3 ist eine neue Funktion, die Zugriffsrichtlinien überwacht und sicherstellt, dass nur der beabsichtigte Zugriff auf S3-Ressourcen möglich ist. Auf diese Weise können Buckets mit möglicherweise unbeabsichtigtem Zugriff identifiziert und Sicherheitsrichtlinien korrigiert werden.

Access Analyzer für S3 ist in der S3 Management Console ohne zusätzliche Kosten verfügbar„Der Analyzer ist wichtig für Security und [Governance](https://www.storage-insider.de/was-ist-data-governance-a-795904/), für einen Audit-Trail und für Bucket Policies“, erläutert AWS-Experte Hanisch. „Er ergänzt den IAM Access Analyzer und AWS Macie.“ Kunden können „Amazon Macie“ verwenden, um ihre in Amazon S3 gespeicherten vertraulichen Daten zu ermitteln, zu klassifizieren und zu schützen. Durch maschinelles Lernen erkennt Amazon Macie persönliche Informationen oder geistiges Eigentum und stellt Dashboards und Warnungen bereit, die zeigen, wie auf diese Daten zugegriffen wird oder wie sie sich bewegen. Amazon Macie überwacht auch Datenzugriffsmuster auf Anomalien und warnt, wenn durch nicht autorisierte Zugriffe oder versehentliche Datenlecks ein Risiko erkannt wird.

**Zeitbasierte Aufbewahrungsrichtlinien für DLM**

Seit Ende November 2019 können Benutzer in "Data Lifecycle Manager" (DLM) zeitbasierte Aufbewahrungsrichtlinien festlegen. Mit diesem Start können Sie die Aufbewahrungsdauer für Snapshots in den folgenden Intervalleinheiten im DLM definieren: Tage, Wochen, Monate und Jahre. Zeitbasierte Aufbewahrungsrichtlinien erleichtern die Erfüllung von Compliance-Anforderungen, bei denen Benutzer Backups (EBS-Volume-Snapshots) für einen bestimmten Zeitraum behalten müssen. „Dies ist im Hinblick auf die [DSGVO](https://www.storage-insider.de/was-ist-die-eu-datenschutz-grundverordnung-dsgvo-a-891575/) und andere Vorschriften zur Datenhaltung von Bedeutung“, sagt Hanisch.

**Elasticsearch Service wird „UltraWarm“**

AWS bietet jetzt hierarchisches Speichermanagement für den "Amazon Elasticsearch Service" an. Dieser Service wurde kürzlich um die Speicherleistungsstufe "UltraWarm" erweitert. „Mit UltraWarm können Nutzer ihre Daten mit Elasticsearch und Kibana speichern und interaktiv analysieren sowie gleichzeitig ihre Kosten pro GB um bis zu 90 Prozent gegenüber den vorhandenen ‚heißen‘ Speicherungsoptionen von Amazon Elasticsearch Service senken“, erläutert Hanisch. „Mit UltraWarm unterstützt Amazon Elasticsearch Service jetzt heiß-warme Domänenkonfigurationen.“Hot Storage wird für die Indizierung und den schnelleren Zugriff auf Daten verwendet. UltraWarm ergänzt Hot Storage durch billigeren, länger anhaltenden Speicher für ältere Daten, auf den Benutzer weniger häufig zugreifen, während das interaktive Analyseerlebnis beibehalten wird. Die UltraWarm-Vorschau ist derzeit in Elasticsearch Version 6.8 in drei US-Regionen verfügbar.

**Amazon FSx für den Windows File Server & Lustre**

Die Unterstützung von Amazon FSx (File Services) für Windows File Server wurde erheblich erweitert. "FSx für Windows ist ein verwalteter Dienst, der über mehrere Verfügbarkeitszonen hinweg funktioniert", erklärt Hanisch und fügt hinzu: "FSx ermöglicht jetzt auch die clientseitige Datendeduplizierung und -komprimierung von Windows-Dateien sowie die Verschlüsselung durch AWS. und die Definition, mit welchen Schlüsseln der Algorithmus verwendet wird \[AES et cetera\]. “Aber einer nach dem anderen. Durch die Deduplizierung werden die Speicherkosten für die allgemeine Dateifreigabe voraussichtlich um beachtliche 50 bis 60 Prozent gesenkt.

Der Vorteil: Speicheradministratoren können Speicherkosten in Amazon FSx-Dateisystemen sparen, indem sie die Datendeduplizierung mit einem Befehl ermöglichen. Die Einsparungen betragen in der Regel 50 bis 60 Prozent für die allgemeine Dateifreigabe, 30 bis 50 Prozent für Benutzerdokumente und 70 bis 80 Prozent für Datensätze in der Softwareentwicklung. Die Unterstützung für die Datendeduplizierung ist jetzt für alle neuen Dateisysteme in allen Regionen, in denen Amazon FSx angeboten wird, kostenlos verfügbar. Amazon FSx für Windows File Server unterstützt jetzt Benutzerspeicherkontingente, sodass Administratoren die Speichernutzung der Benutzer in ihren Dateisystemen steuern und begrenzen können. Die Unterstützung für Benutzerspeicherkontingente ist jetzt für alle neuen Dateisysteme in allen Regionen, in denen Amazon FSx verfügbar ist, kostenlos verfügbar.

Mit demselben Dienst konnten Speicheradministratoren kürzlich die Verschlüsselung von Daten erzwingen, wenn diese auf Dateisysteme übertragen werden.

Dies ist die Datenverschlüsselung während der Übertragung mit SMB Version 3. Der Dienst ermöglicht unverschlüsselte Verbindungen von Compute-Instanzen, die SMB 3 nicht unterstützen. Benutzer können den Zugriff jetzt nur dann zur Verschlüsselung erzwingen, wenn ihre Compliance-Anforderungen dies erfordern. "Amazon FSx für Windows-Dateiserver" konnte kürzlich die Dateifreigabe über PowerShell verwalten. Auf diese Weise können Speicheradministratoren die Migration, Synchronisierung und fortlaufende Verwaltung freigegebener Dateien auf Amazon FSx-Dateisystemen automatisieren. Amazon FSx bietet zahlreiche Verbesserungen für die AWS Management Console, darunter die Möglichkeit, Amazon FSx CloudWatch-Metriken anzuzeigen und Tags direkt über die Amazon FSx-Konsole hinzuzufügen und zu aktualisieren.

Amazon FSx ist nicht nur für Windows verfügbar, sondern auch für Lustre, ein leistungsstarkes Dateisystem für anspruchsvolle Workloads wie HPC (High Performance Computing) und maschinelles Lernen. Amazon FSx for Lustre wurden Funktionen zur Erleichterung der Synchronisierung von Daten- und Dateiberechtigungen zwischen Amazon FSx und Amazon S3 zugewiesen. Außerdem hat Amazon FSx die Geschwindigkeit beim Starten von FSx-Dateisystemen, die mit S3-Buckets verknüpft sind, vervierfacht. Um den Container-Service Elastic Kubernetes Service (EKS) besser zu unterstützen, hat Amazon kürzlich eine Beta-Version seines FSx für den Lustre CSI-Treiber angekündigt. FSx for Lustre wird voraussichtlich auch ein AWS-Repository für Lustre-Clients verwalten.

**Elastic File System (EFS)**

Amazon EFS-Zugriffspunkte (Amazon Elastic File System) sind eine neue EFS-Funktion, die es Benutzern erleichtert, Anwendungen den Zugriff auf gemeinsam genutzte Datensätze in einem EFS-Dateisystem zu ermöglichen. Amazon EFS ist ein robustes, skalierbares, vollständig verwaltetes und benutzerfreundliches NFS-Dateisystem. EFS-Zugriffspunkte arbeiten mit AWS IAM zusammen und wenden einen Betriebssystembenutzer und eine Betriebssystemgruppe sowie ein Verzeichnis für jede Dateisystemanforderung an, die über den Zugriffspunkt gesendet wird. EFS Access Points sind jetzt in allen Regionen verfügbar, in denen Amazon EFS ohne zusätzliche Kosten verfügbar ist. AWS Backup bietet jetzt optimierte Funktionen für die Wiederherstellung auf Elementebene in Amazon EFS. Ziel ist es, Benutzern die granulare Wiederherstellung einzelner Dateien oder Ordner aus Amazon EFS-Sicherungen mithilfe einer zentralen Konsole zu ermöglichen, um eine vereinfachte und schnelle Wiederherstellung zu ermöglichen und die strengsten Anforderungen für das Ziel der Wiederherstellungszeit (RTO) zu erfüllen.

**Elastic Block Storage (EBS)**

Für Elastic Block Storage (EBS) bietet AWS jetzt APIs, die den direkten Lesezugriff auf einzelne Blöcke in EBS-Snapshots ermöglichen. Auf diese Weise können Sicherungssoftware oder Dienstanbieter schnellere Sicherungen von EBS-Volumes zu geringeren Kosten durchführen. Backup-Anbieter sollten nun in der Lage sein, Änderungen an EBS-Volumes mithilfe von EBS-Snapshots einfach zu verfolgen und ihre Workflows zu optimieren, um die Backup-Zeiten um bis zu 70 Prozent zu reduzieren. Dies sollte es ihnen ermöglichen, AWS-Kunden detailliertere Recovery Point Objectives (RPO) zu geringeren Kosten anzubieten. Für EBS optimierte Instanzen erhalten eine Leistungssteigerung durch die Verwendung von Instanzen, die auf dem Amazon EC2-Nitrosystem basieren. Das AWS Nitro-System ist die Basisplattform für die neueste Generation von EC2-Instanzen. Dadurch kann AWS Innovationen schneller vorantreiben, die Kosten für Kunden weiter senken und zusätzliche Vorteile wie erhöhte Sicherheit und neue Instanztypen bieten.

Mit den neuesten Verbesserungen des Nitro-Systems unterstützen alle neuen Instanzen C5 / C5d / C5n, M5 / M5d / M5n / M5dn / M5dn, R5 / R5d / R5n / R5dn und P3dn jetzt 36% EBS-optimierte Instanzbandbreite Höchste bis zu 19 Gbit / s, die ausschließlich für den Zugriff auf EBS-Einheiten bereitgestellt werden. 6, 9 und 12 TB Amazon EC2-Instanzen mit hohem Speicher können jetzt auch eine für EBS optimierte Instanzbandbreite von 19 Gbit / s unterstützen, was einer Steigerung von 36 Prozent gegenüber den vorherigen 14 Gbit / s entspricht. Der Vorteil: „Diese Leistungssteigerung ermöglicht es Nutzern, Teile ihrer Workflows in Abhängigkeit von der EBS-optimierten Instanzleistung zu beschleunigen. Für Workloads mit vielen gleichzeitigen Laufwerkszugriffen haben sie die Möglichkeit, kleinere Instanzgrößen zu verwenden und dennoch höhere [Bandbreiten](https://www.storage-insider.de/was-ist-bandbreite-a-816288/) für die Zugriffe auf EBS-Laufwerke zu nutzen und so Kosten zu sparen“, erläutert Hanisch.  Mit dieser Leistungssteigerung können Benutzer ungeplante Leistungsspitzen beim Zugriff auf EBS-Laufwerke bewältigen, ohne die Größe der Instanzen für ihre Anwendung zu erhöhen.

## [Weitere Beiträge](https://thinkport.digital/blog)

[![Kopie von Hack with (4)](images/Kopie-von-Hack-with-4.png "Kopie von Hack with (4)")](https://thinkport.digital/16-things-to-avoid-when-writing-for-your-ui/)

### [16 Things to Avoid When Writing For Your UI](https://thinkport.digital/16-things-to-avoid-when-writing-for-your-ui/ "16 Things to Avoid When Writing For Your UI")

[Frontend](https://thinkport.digital/category/frontend/)

### [16 Things to Avoid When Writing For Your UI](https://thinkport.digital/16-things-to-avoid-when-writing-for-your-ui/ "16 Things to Avoid When Writing For Your UI")

[Frontend](https://thinkport.digital/category/frontend/)

[![GreatUI](images/Kopie-von-Hack-with.png "GreatUI")](https://thinkport.digital/7-golden-rules-for-creating-great-ui/)

### [7 Golden Rules for Creating Great UI](https://thinkport.digital/7-golden-rules-for-creating-great-ui/ "7 Golden Rules for Creating Great UI")

[Frontend](https://thinkport.digital/category/frontend/)

### [7 Golden Rules for Creating Great UI](https://thinkport.digital/7-golden-rules-for-creating-great-ui/ "7 Golden Rules for Creating Great UI")

[Frontend](https://thinkport.digital/category/frontend/)

[![Hack with (4)](images/Hack-with-4.png "Hack with (4)")](https://thinkport.digital/aws-rds-2/)

### [AWS RDS](https://thinkport.digital/aws-rds-2/ "AWS RDS")

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [AWS RDS](https://thinkport.digital/aws-rds-2/ "AWS RDS")

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

[![Reasons Why (2)](images/Reasons-Why-2.png "Reasons Why (2)")](https://thinkport.digital/practical-tips-and-tricks-on-how-to-use-typography-in-ui-design/)

### [Practical Tips and Tricks on How to Use Typography in UI Design](https://thinkport.digital/practical-tips-and-tricks-on-how-to-use-typography-in-ui-design/ "Practical Tips and Tricks on How to Use Typography in UI Design")

[Big Data](https://thinkport.digital/category/big-data/)

### [Practical Tips and Tricks on How to Use Typography in UI Design](https://thinkport.digital/practical-tips-and-tricks-on-how-to-use-typography-in-ui-design/ "Practical Tips and Tricks on How to Use Typography in UI Design")

[Big Data](https://thinkport.digital/category/big-data/)

[![Terrafrom eines der besten DvOps Tools (1)](images/Terrafrom-eines-der-besten-DvOps-Tools-1-1024x696.png "Terraform_DevOps Tools")](https://thinkport.digital/warum-terraform-einer-ihrer-devops-tools-sein-sollte/)

### [Warum Terraform eines Ihrer DevOps Tools sein sollte](https://thinkport.digital/warum-terraform-einer-ihrer-devops-tools-sein-sollte/ "Warum Terraform eines Ihrer DevOps Tools sein sollte")

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [Warum Terraform eines Ihrer DevOps Tools sein sollte](https://thinkport.digital/warum-terraform-einer-ihrer-devops-tools-sein-sollte/ "Warum Terraform eines Ihrer DevOps Tools sein sollte")

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

[![BDHomeBanner](images/BDHomeBanner-e1535112378878.png "BDHomeBanner")](https://thinkport.digital/10-big-data-trends-to-watch-in-2018/)

### [10 Big Data Trends to watch in 2018](https://thinkport.digital/10-big-data-trends-to-watch-in-2018/ "10 Big Data Trends to watch in 2018")

[Big Data](https://thinkport.digital/category/big-data/)

### [10 Big Data Trends to watch in 2018](https://thinkport.digital/10-big-data-trends-to-watch-in-2018/ "10 Big Data Trends to watch in 2018")

[Big Data](https://thinkport.digital/category/big-data/)

## Blog Kurator

![portrait Christina](images/Christina.png)

### Christina Friede

### Business Development

## Email:

## [cfriede@thinkport.digital](mailto:cfriede@thinkport.digital)

*  [](https://www.linkedin.com/in/christina-friede-2a6426168/)
