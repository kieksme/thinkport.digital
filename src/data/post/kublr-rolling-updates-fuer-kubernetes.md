---
title: 'Kublr bringt Rolling-Updates für Kubernetes'
publishDate: 2020-03-30T10:00:00Z
categories: + "aws-cloud"
  + "cloud-kubernetes"
coverImage: 'Kublr-bringt-Rolling.png'
---

[![Thinkport Logo](images/Logo_horizontral_new-ovavzp5ztqmosy1yz1jrwr9fv5swhtoc0bky3tkc3g.png 'Logo Bright Colours')](https://thinkport.digital)[![Thinkport Logo](images/Logo_horizontral_new-ovavzp5ztqmosy1yz1jrwr9fv5swhtoc0bky3tkc3g.png 'Logo Bright Colours')](https://thinkport.digital)

Updates für Kubernetes

CLOUD Kubernetes

# Kublr bringt Rolling Updates für Kubernetes

[Linkedin](https://www.linkedin.com/company/11759873) [Instagram](https://www.instagram.com/thinkport/) [Youtube](https://www.youtube.com/channel/UCnke3WYRT6bxuMK2t4jw2qQ) [Envelope](mailto:tdrechsel@thinkport.digital)[](#linksection)

Das neu veröffentlichte Kublr 1.16, ein Tool, das den Einsatz von Kubernetes-Clustern in Unternehmensqualität erleichtert, ist die erste Multi-Cloud- und Multi-Plattform-Kubernetes-Plattform, die rolling Updates für die Open-Source-Container-Orchestrierungs-Engine bietet, so das Unternehmen, das hinter der Technologie steht.

“This functionality is essential whether you want to ensure your infrastructure, applications, or production components are upgraded in a timely manner, or apply security fixes and patches as soon as they become available to avoid exploits, ” so [Oleg Chunikhin](https://www.linkedin.com/in/olegch/), chief technology officer bei Kublr.

Der typische Prozess vor der rolling Update-Fähigkeit bestand darin, dass IT-Experten einen anderen Cluster einsetzen und die Anwendung replizieren mussten, um den Service konsistent zu liefern und gleichzeitig den ursprünglichen Cluster zu aktualisieren. Diese neue Funktion spart jedoch sowohl Zeit als auch Ressourcen, da es nicht notwendig ist, parallele Cluster zu betreiben.

“In a Kubernetes and cloud native world, this ability is more critical than ever, ” sagte Oleg Chunikhin. “The ecosystem is evolving quickly and components are changing fast. Just think of Kubernetes’ quarterly updates. And then there are all the other components, each of which has its own release schedule. This is a far cry from the traditional hardware/VM infrastructure where updates were released at a far slower pace. Your ops and DevOps teams will want to leverage new functionalities right away and shutting clusters down each time to do so, is not feasible.”

“While cloud providers have been offering rolling updates for some time, ” so Chunikhin, “this isn’t the case for providers that allow you to deploy clusters in your own infrastructures. Kublr being able to upgrade clusters in-place with no downtime and uniformly in all supported environments (whether cloud or on-prem) enables IT operations teams to scale without sacrificing flexibility and operational agility.”

**Wie funktioniert das neue Feature?**

Kublr hat auf seiner Website einen Blog veröffentlicht, der einige Einblicke in das gibt, was IT-Teams erwarten können, wenn sie sich für die Nutzung der rolling Updates entscheiden.

Während eines Upgrades verschiebt Kublr automatisch die laufenden Anwendungen von den Nodes, die mit den zu aktualisierenden Nodes verbunden sind. Dieser Ansatz bedeutet, dass die Benutzer die Gesamtzahl der laufenden Instanzen entsprechend den von ihnen festgelegten Spezifikationen minimieren. Anschließend bedient die Applikation den Server-Clients, ohne Ausfallzeiten zu verursachen.

Unabhängig davon, ob Unternehmen in On-Premise-Umgebungen arbeiten oder von Amazon Web Services (AWS), der Google Cloud Platform (GCP) oder Microsoft Azure abhängig sind, Version 1.16 unterstützt sie. Kublr bietet auch Kompatibilität für Bare-Metal- und Air-Gap-Umgebungen. Die Nutzer sollten erwarten, dass die Cluster- und Infrastruktur-Upgrades in allen Umgebungen gleich gut funktionieren.

Auch wenn andere Kubernetes-Produkte die Durchführung von Updates ermöglichen, steht Kublr mit seinem Angebot dieser rolling Updates allein da, da es die erste unabhängige Kubernetes-Engine ist, die diese Updates anbietet. Personen, die noch keine Kublr-Kunden sind, können das Tool kostenlos einsetzen, um zu sehen, wie es für sie funktioniert, und diese neue Option ausprobieren.

**Rolling Updates können mit der Role-Based Access Control (RBAC) integriert werden**

Die Unterstützung für die Role-Based Access Control (RBAC) ist eine weitere aktuelle Entwicklung, die von Kublr angeboten wird und erstmals in der Version 1.15 verfügbar ist. Beim Zugriff auf die Kublr-Benutzeroberfläche kann man entweder die RBAC des Unternehmens oder die mit Kubernetes verbundene RBAC wählen. Die RBAC von Kublr ermöglicht es Systemadministratoren, den Grad des Cluster-Zugriffs für verschiedene Benutzergruppen festzulegen. Mit dem RBAC kann bestimmt werden, ob eine Person die Infrastruktur eines Clusters oder die mit diesem Cluster verbundene Kubernetes-Version erstellen oder aktualisieren kann.

Dann ermöglicht die RBAC, die Kubernetes anbietet, die Konfiguration von Berechtigungen für das, was Personen, die verschiedenen Benutzergruppen zugeordnet sind, innerhalb der Cluster tun können. Beispielsweise können Personen mit den entsprechenden Berechtigungen innerhalb des Systems die Ressourcen eines Clusters, einschließlich seiner Ressourcen und Objekte, bearbeiten und verwalten.

Die Kublr-Benutzeroberfläche vereinfacht die RBAC-Bedenken. Unabhängig davon, ob ein Cluster RBAC aus Kublr oder Kubernetes verwendet, kann ein Benutzer auf alle an einem Ort zugreifen, was die Verwirrung verringert. Darüber hinaus erhöht diese Einrichtung die Sicherheit, da ein autorisierter Kublr-Benutzer überprüfen kann, ob die richtigen Berechtigungen für jeden Cluster gelten. Darüber hinaus gibt es eine zentralisierte RBAC-Funktion, die alle RBAC-Berechtigungen auf die von den Clustern gesammelten Protokolle ausweitet.

Bei der Ankündigung der Funktion für fortlaufende Aktualisierungen gab Kublr bekannt, dass die RBAC-Funktionen für Personen, die Version 1.16 verwenden, weiterhin zur Verfügung stehen.

**Kubernetes Nutzung nimmt zu**

Es sollte für IT-Teams leicht verständlich sein, warum die rolling Upgrades und RBAC-Fähigkeiten, die mit Kublr verbunden sind, die Art und Weise, wie ihre Unternehmen Kubernetes nutzen, rationalisieren könnten. Die Eliminierung unnötiger Schritte im Zusammenhang mit der Bereitstellung und dem Management von Clustern ist von wesentlicher Bedeutung, insbesondere angesichts der wachsenden Zahl von Unternehmen aller Größenordnungen, die mit Kubernetes-Clustern arbeiten.

Laut einer Umfrage der Cloud Native Computing Foundation aus dem Jahr 2019 gaben 78% der Befragten an, Kubernetes in der Produktion einzusetzen. Dieser Prozentsatz stellt einen Anstieg von 20% gegenüber den Ergebnissen des Vorjahres dar. Auch die Zahl der Personen in der Evaluierungsphase ging um fast die Hälfte (48%) zurück, da viele der ehemaligen Evaluatoren in die Produktionsphase übergingen.

Die meisten der Befragten, die Kubernetes verwendeten, gaben an, dass sie 2-5 Cluster in der Produktionsphase hatten, wobei 43% diesen Betrag wählten. In diesem Zusammenhang gaben 10 % der Parteien an, dass sie 2-10 Cluster in der Produktionsphase hätten.

Diese Statistiken legen zusammengenommen und nachdrücklich nahe, dass mehr IT-Entscheidungsträger zu dem Schluss kommen, dass Kubernetes für sie eine kluge Wahl ist. Da die Akzeptanz des Kubernetes weiter zunimmt, könnten Funktionen wie die von Kublr zunehmend relevanter und geschätzter werden.

**Unkomplizierteres Cluster-Management**

“Our ultimate goal is to become a true meta-cloud, so Chunikhin. “A new type of infrastructure with flexible, cloud native, enterprise-grade modules including storage, networking, data management, and BCDR, and deployable across different public cloud, private cloud, and on-prem infrastructure. That is pretty ambitious — we know that. It’s also reflected in our extensive roadmap, with each iteration we are getting a little closer and that’s pretty exciting.”

“We’ll expand the IT ops team’s ability to deliver Kubernetes across their organization in a reliable and well-governed manner, ” sagte Chunikhin.  Geplante Funktionen umfassen:

- Beibehaltung der Versionsparität von Kubernetes und anderen Komponenten

- Kublr ist eine der wenigen Kubernetes-Lösungen für Unternehmen, die die neueste Version von Kubernetes unterstützen.

- Unterstützung für extern bereitgestellte Cluster (z. B. Cloud-verwaltete Kubernetes und andere Kubernetes-Bereitstellungs- und Management-Tools). Diese Funktion wird die Betriebsfunktionen von Kublr, wie z. B. die zentralisierte Logsammlung, Überwachung, Sicherheit und RBAC, auf nicht von Kublr bereitgestellte Cluster ausweiten.

- Umfassende Governance-Richtlinien, die es dem IT-Betrieb ermöglichen, Governance-Regeln und Grenzen zu definieren, innerhalb derer Software-Entwicklungsteams Kubernetes-Cluster verwenden und betreiben können, einschließlich Netzwerk, Zugriffskontrolle, Ressourcenkontingente usw.

- Erweiterte Funktionen im Zusammenhang mit der Bereitstellung von Kubernetes an mehreren Standorten (Multi-Cloud, Multi-Region, Hybrid), einschließlich Netzwerkkonnektivität, Föderation, Datenreplikation, Orchestrierung an mehreren Standorten und DR.

- Eine Vielzahl von Anwendungspaketen und Partner-Integrationen wie CI/CD (Spinnaker, Jenkins), Service-Meshes (Istio, Linkerd), FaaS (OpenFaaS), Sicherheit (NeuVector), Speicherung (Ceph/Rook, Portworx, Yugabyte, HDFS), Datenwissenschaft (Spark).

## [Weitere Beiträge](https://thinkport.digital/blog)

### [IT-Automatisierung als Antwort gegen die Corona-Krise](https://thinkport.digital/it-automatisierung-als-antwort-gegen-die-corona-krise/ 'IT-Automatisierung als Antwort gegen die Corona-Krise')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/), [Big Data](https://thinkport.digital/category/big-data/)

### [IT-Automatisierung als Antwort gegen die Corona-Krise](https://thinkport.digital/it-automatisierung-als-antwort-gegen-die-corona-krise/ 'IT-Automatisierung als Antwort gegen die Corona-Krise')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/), [Big Data](https://thinkport.digital/category/big-data/)

[![Kopie von Hack with (4)](images/Kopie-von-Hack-with-4.png 'Kopie von Hack with (4)')](https://thinkport.digital/16-things-to-avoid-when-writing-for-your-ui/)

### [16 Things to Avoid When Writing For Your UI](https://thinkport.digital/16-things-to-avoid-when-writing-for-your-ui/ '16 Things to Avoid When Writing For Your UI')

[Frontend](https://thinkport.digital/category/frontend/)

### [16 Things to Avoid When Writing For Your UI](https://thinkport.digital/16-things-to-avoid-when-writing-for-your-ui/ '16 Things to Avoid When Writing For Your UI')

[Frontend](https://thinkport.digital/category/frontend/)

### [Managed Security für AWS-Umgebungen](https://thinkport.digital/neue-aws-funktionen-fur-speicher-und-dateisysteme-2/ 'Managed Security für AWS-Umgebungen')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [Managed Security für AWS-Umgebungen](https://thinkport.digital/neue-aws-funktionen-fur-speicher-und-dateisysteme-2/ 'Managed Security für AWS-Umgebungen')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

[![Reasons Why](images/Reasons-Why.png 'Reasons Why')](https://thinkport.digital/reasons-why-dynamodb-is-not-for-everyone/)

### [Reasons Why DynamoDB is Not for Everyone](https://thinkport.digital/reasons-why-dynamodb-is-not-for-everyone/ 'Reasons Why DynamoDB is Not for Everyone')

[Big Data](https://thinkport.digital/category/big-data/)

### [Reasons Why DynamoDB is Not for Everyone](https://thinkport.digital/reasons-why-dynamodb-is-not-for-everyone/ 'Reasons Why DynamoDB is Not for Everyone')

[Big Data](https://thinkport.digital/category/big-data/)

[![Airflow on AWS](images/Kafka-1-1024x696.png 'picture blog post Airflow')](https://thinkport.digital/how-to-deploy-airflow-on-aws/)

### [Three ways to deploy Airflow on AWS](https://thinkport.digital/how-to-deploy-airflow-on-aws/ 'Three ways to deploy Airflow on AWS')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [Three ways to deploy Airflow on AWS](https://thinkport.digital/how-to-deploy-airflow-on-aws/ 'Three ways to deploy Airflow on AWS')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

[![GreatUI](images/Kopie-von-Hack-with.png 'GreatUI')](https://thinkport.digital/7-golden-rules-for-creating-great-ui/)

### [7 Golden Rules for Creating Great UI](https://thinkport.digital/7-golden-rules-for-creating-great-ui/ '7 Golden Rules for Creating Great UI')

[Frontend](https://thinkport.digital/category/frontend/)

### [7 Golden Rules for Creating Great UI](https://thinkport.digital/7-golden-rules-for-creating-great-ui/ '7 Golden Rules for Creating Great UI')

[Frontend](https://thinkport.digital/category/frontend/)

## Blog Kurator

![portrait Christina](images/Christina.png)

### Christina Friede

### Business Development

## Email:

## [cfriede@thinkport.digital](mailto:cfriede@thinkport.digital)

-  [](https://www.linkedin.com/in/christina-friede-2a6426168/)
