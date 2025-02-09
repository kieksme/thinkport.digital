---
title: "Synapse, Databricks, Glue, Athena - Welche Lösung für Big Data?"
publishDate: 2024-01-08T10:00:00Z
categories: 
  + "big-data"
  + "cloud-general"
coverImage: "Kontextuelles-Verständnis-1.webp"
---

# Entscheidung für Big Data:  

Databricks, Synapse, Glue, Athena?

Die Auswahl der richtigen Datenplattform für Big Data-Anwendungen ist entscheidend für den Erfolg moderner Unternehmen. Mit den prominenten Plattformen Databricks, Synapse, Glue und Athena bietet sowohl Azure von Microsoft als auch AWS von Amazon leistungsstarke Lösungen an. In diesem Artikel werfen wir einen tiefen Blick auf die Vorzüge und Eigenschaften dieser vier Giganten, um Ihnen bei der Entscheidung zu helfen, welche Plattform am besten zu Ihren spezifischen Anforderungen passt. Zunächst definieren wir die Hauptanforderungen, identifizieren dann Bonusfunktionen und berücksichtigen schließlich die Rahmenbedingungen, die bei der Auswahl einer Big Data-Plattform eine Rolle spielen. Tauchen Sie mit uns ein in die Welt von Databricks, Synapse, Glue und Athena, um die optimale Wahl für Ihr Unternehmen zu treffen.

## Hauptanforderungen

1. **Benutzerfreundliche Entwicklungsoberfläche:**  
    Gewährleistung einer einfachen Entwicklungsumgebung sowohl für Data Engineers als auch für Data Scientists.
    

2. **Notebook- und Pyspark-Entwicklung:**  
    Unterstützung für die Entwicklung von Datenprozessen und Analysen durch Notebooks und Pyspark.
    

3. **Ad-Hoc-Analysen in SQL und Pyspark:**  
    Möglichkeit für spontane Analysen mittels SQL und Pyspark.
    

4. **BI-Tool-Konnektivität:**  
    Nahtlose Integration mit Business Intelligence-Tools wie Tableau und PowerBI.
    

5. **Unterstützung von Warehousing-Formaten:**  
    Fähigkeit zur Verarbeitung von Daten in verschiedenen Tabellenformaten wie Delta, Iceberg und Hudi für effizientes Data Warehousing.
    

6. **Pipeline-Entwicklung und Job-Scheduling:**  
    Bereitstellung von Funktionen zur Entwicklung von Datenpipelines sowie zur zeitgesteuerten Planung, Überwachung und Benachrichtigung von Jobs.
    

7. **Versionsverwaltung über Github:**  
    Integration einer Versionsverwaltung für den Code über Plattformen wie Github.
    

8. **Arbeitsbereichstrennung und Berechtigungen:**  
    Implementierung einer klaren Trennung von Arbeitsbereichen und die Vergabe von Berechtigungen für verschiedene Teams.
    

## Bonusanforderungen

1. **Unabhängiger Zugang ohne Cloud-Führerschein:**  
    Gewährleistung eines separaten Zugangs ohne die Notwendigkeit eines Cloud-Führerscheins. Beispielsweise ermöglicht Databricks Workspaces einen unabhängigen Zugriff, ohne dass ein Login in die Azure Console erforderlich ist.
    

2. **Geringe Abhängigkeit von Cloud IaC:**  
    Minimierung oder Vermeidung von Abhängigkeiten von Infrastructure as Code (IaC) für alltägliche Datenverarbeitungsaufgaben. Die Plattform sollte es erlauben, Notebooks, Datenmanagement und Job-Scheduling in der Benutzeroberfläche zu erstellen, ohne spezielle Cloud-Ressourcen zu erstellen oder den Zugriff über die CLI oder Konsole zu benötigen.
    

3. **Datenberechtigungen:**  
    Umfassende Kontrolle über Datenberechtigungen, einschließlich feingranularer Zugriffskontrollen, um sicherzustellen, dass sensible Daten angemessen geschützt sind.

## Randbedingungen

1. **Bestehende Daten auf AWS S3 Data Lake:**  
    Berücksichtigung der aktuellen Datenlage auf einem AWS S3 Data Lake, mit der Tendenz, weiterhin AWS-Tools für die Datenverarbeitung zu bevorzugen.
    

2. **Nachbarteam migriert zu Azure Synapse:**  
    Beachtung der Tatsache, dass das benachbarte Team seine gesamte Hadoop-Plattform nach einem neunmonatigen Proof of Concept (PoC) auf Azure Synapse migriert. Möglicherweise besteht die Notwendigkeit, Synergien mit diesem Team zu schaffen oder Integrationsmöglichkeiten zu prüfen.
    

3. **Persönliche Empfehlung für Databricks aufgrund der Benutzerfreundlichkeit:**  
    Eine persönliche Präferenz für Databricks aufgrund der Benutzerfreundlichkeit und Intuitivität. Die Plattformauswahl sollte nicht nur technischen Anforderungen entsprechen, sondern auch die Akzeptanz und Effizienz der Benutzer im Team fördern.
    

| Bereich | AWS Glue | AWS Athena | Azure Databricks | Azure Synapse |
| --- | --- | --- | --- | --- |
| Description | AWS Glue is a fully managed ETL service that allows you to extract, transform, and load data from various sources into a target data store for analytics. | AWS Athena is an interactive query service provided by Amazon Web Services (AWS) that allows you to analyze data directly from Amazon S3 using standard SQL queries | Databricks is a unified analytics platform for big data processing and machine learning (ETL, SQL Queries and ML Training at scale) | Azure Synapse Analytics is combines big data and data warehousing capabilities into a single unified platform. It allows you to ingest, prepare, manage, and serve data for immediate business intelligence and data-driven decision-making. |
|  | In combination same as current AIC, Databricks or Synapsis | All in One Plattform |  |
| Notebooks | yes, Jupyter | yes, Jupyter | yes | yes |
| Pyspark/Pandas | yes, with Glue Context | yes, Pyspark | yes | yes |
| SQL | no | yes, standard SQL | yes, standard SQL + NoSQL-Extension | yes, standard SQL |
| Git Integration | yes | Contenido | yes | yes |
| ETL Pipeline building | yes | no | yes, via Notebooks, Pyspark, SQL Scripts | Notebooks |
| Ad hoc Analysis | no | yes | yes, via Notebooks, Serverles SQL | SQL, Notebooks |
| External BI Tools PowerBI, Tabelau | no | yes | yes | yes |
| Table Formats | csv, parquet, json, avro, orc etc. | parquet, orc registered via Glue Data Catalog | yes, via Delta Format | yes, via Delta Format |
| Data Warehousing |  | yes | yes, with Unity Catalog | yes |
| Jobs, Workflows | yes, via step functions or Glue workflows | yes, via step functions | yes, internal and external |  |
| Monitoring, Debuging | yes, Spark UI and Job Monitoring | job Monitoring | yes, Spark UI and Job Monitoring | yes, Spark UI and Job Monitoring |
| Stream processing | no | no | yes | no, separate service Azure Stream Analytics for that |
| Batch processing | yes | yes | yes | yes |
| Access Management | via AWS IAM | via AWS IAM | yes, via Unity Catalog. Groups/Users can be sourced from Azure AD and assigned permissions in Unity Catalog | yes, direct via Azure AD |
| Data Lineage | no | no | yes | rudimentary view |
| Time Travel | yes, Iceberg, Hudi, Linux Foundation Delta Lake | can query Delta Lake tables, Hudi datasets and Iceberg tables | yes, via Delta | yes, via Delta |
| Flexibility and Costs | Payed per Job run or Cluster similar to Databricks | Complete Serverless but simple to configure. Expensive if used extensively with a large amount of queries as every cpu second is charged | Very flexible in controlling costs by limiting cluster configurations, but some admin effort. Charged for the running cluster no matter if one or 10 jobs run on the cluster | Complete serverless but simple to configure. Expensive if used extensive as every cpu second is charged |
|  | Glue is optimal for data preparation  
  
Why: Fully managed ETL service, serverless execution, integrates with various AWS data sources. | If you have occasional SQL queries on static data in Amazon S3  
  
Why: Athena is serverless, cost-effective for sporadic queries, and suitable for ad-hoc analysis on static data. | If your primary focus is on end-to-end analytics, including machine learning and data engineering  
  
Why: Databricks provides a unified platform for analytics, supports Apache Spark for scalable data processing, and seamlessly integrates with Delta Lake for structured data versioning. Collaborative Workspace for multiple Teams | If your primary focus is on large-scale structured analytics and data warehousing:  
  
Why: Synapse Analytics is optimized for structured analytics, offers a massively parallel processing architecture for performance |

![Portrait Alex](images/alex-2-300x300.webp)

## Alex Ortner

_Cloud & Big Data Architect_

[](https://www.linkedin.com/in/dr-alex-ortner-aa578984/)

## [Weitere Beiträge](https://thinkport.digital/blog)

[![Apache Airflow](images/Apache-Airflow.png "Logo mit Schriftzug Apache Airflow vor strahlendem Hintergrund")](https://thinkport.digital/apache-airflow/)

### [Apache Airflow](https://thinkport.digital/apache-airflow/ "Apache Airflow")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Hybrid-Cloud](https://thinkport.digital/category/hybrid-cloud/)

### [Apache Airflow](https://thinkport.digital/apache-airflow/ "Apache Airflow")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Hybrid-Cloud](https://thinkport.digital/category/hybrid-cloud/)

[![Analyse medizinischer Bilder](images/website-pictures-1024x683.webp "modern technology applied to medicine, to transfer data and pictures --v 5.2")](https://thinkport.digital/orthanc-und-dicom-fuer-medizinische-bilder/)

### [Orthanc und DICOM: Innovative Lösungen für die effiziente Verwaltung und Analyse medizinischer Bilder](https://thinkport.digital/orthanc-und-dicom-fuer-medizinische-bilder/ "Orthanc und DICOM: Innovative Lösungen für die effiziente Verwaltung und Analyse medizinischer Bilder")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Disrupt](https://thinkport.digital/category/disrupt/), [Streaming](https://thinkport.digital/category/streaming/)

### [Orthanc und DICOM: Innovative Lösungen für die effiziente Verwaltung und Analyse medizinischer Bilder](https://thinkport.digital/orthanc-und-dicom-fuer-medizinische-bilder/ "Orthanc und DICOM: Innovative Lösungen für die effiziente Verwaltung und Analyse medizinischer Bilder")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Disrupt](https://thinkport.digital/category/disrupt/), [Streaming](https://thinkport.digital/category/streaming/)

[![Kubernetes und Docker](images/Streaming-Services-6.webp "Blauer Hintergrund auf dem sich der Schriftzug "Cloud Consulting mit" und zentral eine orange Wolke befindet, in der sich wiederum in weiß die Logos von Kubernetes und Docker befinden. Unten rechts auf dem Bild befindet sich noch in weiß das Terraform Logo.")](https://thinkport.digital/cloud-consulting-with-kubernetes-and-docker/)

### [Cloud Consulting with Kubernetes and Docker](https://thinkport.digital/cloud-consulting-with-kubernetes-and-docker/ "Cloud Consulting with Kubernetes and Docker")

[Cloud General](https://thinkport.digital/category/cloud-general/)

### [Cloud Consulting with Kubernetes and Docker](https://thinkport.digital/cloud-consulting-with-kubernetes-and-docker/ "Cloud Consulting with Kubernetes and Docker")

[Cloud General](https://thinkport.digital/category/cloud-general/)

[![Azure Databricks](images/Azure-Databricks-2.png "Auf der Abbildung sind die zwei Logos von Azure und Databricks zu sehen")](https://thinkport.digital/azure-databricks/)

### [Azure Databricks](https://thinkport.digital/azure-databricks/ "Azure Databricks")

[Azure Cloud](https://thinkport.digital/category/azure-cloud/), [Cloud General](https://thinkport.digital/category/cloud-general/)

### [Azure Databricks](https://thinkport.digital/azure-databricks/ "Azure Databricks")

[Azure Cloud](https://thinkport.digital/category/azure-cloud/), [Cloud General](https://thinkport.digital/category/cloud-general/)

[![abstract-art-blur-bright-373543](images/abstract-art-blur-bright-373543-1024x683.jpg "abstract-art-blur-bright-373543")](https://thinkport.digital/core-strategies-cloud-migration/)

### [Core Strategies Cloud Migration](https://thinkport.digital/core-strategies-cloud-migration/ "Core Strategies Cloud Migration")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Cloud Kubernetes](https://thinkport.digital/category/cloud-kubernetes/)

### [Core Strategies Cloud Migration](https://thinkport.digital/core-strategies-cloud-migration/ "Core Strategies Cloud Migration")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Cloud Kubernetes](https://thinkport.digital/category/cloud-kubernetes/)

[![Optimizing Kafka](images/Optimizing-Kafka.png "Vor dem rotem Hintergrundbild eines Zahnrads steht der Schriftzug "Optimizing Kafka".")](https://thinkport.digital/optimizing-kafka/)

### [Optimizing Kafka](https://thinkport.digital/optimizing-kafka/ "Optimizing Kafka")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Streaming](https://thinkport.digital/category/streaming/)

### [Optimizing Kafka](https://thinkport.digital/optimizing-kafka/ "Optimizing Kafka")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Streaming](https://thinkport.digital/category/streaming/)
