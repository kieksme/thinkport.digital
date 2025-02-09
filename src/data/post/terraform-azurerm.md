---
title: 'Terraform AzureRM 3.0'
publishDate: 2022-06-08T10:00:00Z
categories: + "iac"
coverImage: 'Terrafrom-eines-der-besten-DvOps-Tools-1.png'
---

[![Thinkport Logo](images/Logo_horizontral_new-ovavzp5ztqmosy1yz1jrwr9fv5swhtoc0bky3tkc3g.png 'Logo Bright Colours')](https://thinkport.digital)[![Thinkport Logo](images/Logo_horizontral_new-ovavzp5ztqmosy1yz1jrwr9fv5swhtoc0bky3tkc3g.png 'Logo Bright Colours')](https://thinkport.digital)

# Terraform AzureRM3.0

CLOUD Terraform

## Terraform AzureRM3.0 und seine neuen Features

[Linkedin](https://www.linkedin.com/company/11759873) [Instagram](https://www.instagram.com/thinkport/) [Youtube](https://www.youtube.com/channel/UCnke3WYRT6bxuMK2t4jw2qQ) [Envelope](mailto:tdrechsel@thinkport.digital)[](#linksection)

Zwei Jahre nach der letzten großen Veröffentlichung hat HashiCorp am 24. März 2022 die neue Version 3.0 für den Terraform AzureRM Provider angekündigt. Mit vielen neuen Features (neuen Datenquellen sowie Ressourcen) und einigen Verbesserungen. Auf diese gehen wir hier ein. Des Weiteren wurden in der neuen Version auch viele Felder und Ressourcen entfernt, die durch die Neuerungen zum großen Teil nun keine Verwendung mehr haben und dadurch entfernt werden konnten.

Zwischen den Versionen V2.0 und V3.0 liegen buchstäblich Welten. Die Akzeptanz des Terraform AzureRM-Anbieters ist enorm gestiegen. Dies spiegelt sich jetzt in der Weiterentwicklung wider. Konkret in Zahlen: Die Ressourcen und Dienste haben sich auf 761 Ressourcen und 238 Datenquellen fast verdoppelt.

## Neuerungen im Überblick

Da wir hier nicht auf jede Neuerung eingehen können, haben wir uns auf die großen ausschlaggebenden Änderungen der Version 3.0 fokussiert. Im Folgenden wollen wir näher auf die Punkte eingehen:

- 1\. Neue Datenquellen und Ressourcen für App Service und Function Apps
- 2\. Soft Delete Wiederherstellung/Bereinigung für Zertifikate, Keys und Secrets
- 3\. Umstellung auf Microsoft Authentication Library (MSAL)
- 4\. Aktualisierungen bestehender Features für Application Gateway, API Management, Ressourcengruppen, Speicherung, u.a.

![Collage Terraform und Azure](images/Zeichenfläche-1.png)

## Neuerungen im Detail

### 1\. Neue Datenquellen und Ressourcen für App Service und Function Apps

Mit der Version 3.0 wurden granularere Ressourcen für App Service eingeführt, um die in Azure verfügbare Funktionalität besser zu repräsentieren. Dies zeigt sich in der verstärkten Trennung einiger Ressourcen in Linux- und Windows-Varianten. Mit dieser Trennung ist eine bessere Validierung sowie eine intuitivere Konfiguration möglich, die sich aus den unterschiedlichen Anforderungen und Fähigkeiten der beiden Betriebssysteme (Linux und Windows) ergibt. Die Liste aller davon betroffenen Datenquellen und Ressourcen sowie deren aktueller Status finden Sie unter dem folgendem **[Link](https://github.com/hashicorp/terraform-provider-azurerm/issues/13816)**.

    				 `provider "azurem" {     features {         key_vault {             # verfügbar in 2.x             purge_soft_delete_on_destroy = true             recover_soft_deleted_key_vaults = true             #verfügbar, wennfür die 3.0 Beta optiert wird             purge_soft_deleted_certificates_on_destroy = true             purge_soft_deleted_keys_on_destroy = true             purge_soft_deleted_secrets_on_destroy = false             recover_soft_deleted_certificates = true             recover_soft_deleted_secrets = false             recover_soft_deleted_keys = true         }     } }`




Code-Snippet: Soft Delete für die Wiederherstellung sowie für die Bereinigung für Secrets wurde ausgeschalten

### 2\. Soft Delete für Key Vault

Auch beim Feature Soft Delete beim Key Vault setzt sich der granularere Ansatz fort. Während in den bisherigen Versionen die Key Vault-Ressource nur als Ganzes verfügbar war, konnte Soft Delete ebenso nur auf die gesamte Ressource angewendet werden. Nun kann man die einzelnen, zum Teil verschachtelten Elemente wie Zertifikate, Keys und Secrets, innerhalb eines Key Vault löschen. Dazu ist der jeweilige Standardwert explizit auf false zu setzen. Siehe dazu den Code-Snippet auf der rechten Seite.

### 3\. Umstellung auf MSAL

Mit der Version 3.0 gibt es auch eine Umstellung hinsichtlich der genutzten Bibliotheken für die Authentifizierung bei APIs wie z. B. dem Ressourcenmanager. Bisher wurde für die Authentifizierungs- und Autorisierungsfunktionen die ADAL (Active Directory Authentication Library) verwendet, die den sogenannten “v1”-Authentifizierungstokens lieferte. Im Dezember 2022 wird Microsoft den Support und die Entwicklung für die ADAL, einschließlich Sicherheitskorrekturen, komplett einstellen. Deshalb ist eine Umstellung auf MSAL erforderlich. Mit MSAL (Microsoft Authentication Library) wird der “v2”-Token verwendet. Wenn sie mehr zur Umstellung wissen möchten, dann lesen sie hier nach. **[Link](https://docs.microsoft.com/de-de/azure/active-directory/develop/msal-migration)**.

### 4\. Aktualisierungen bestehender Features

Eine umfassende Auflistung aller aktualisierten Punkte folgt unten im Link. Hier nur eine fokussierte Auswahl:

- Alle Ressourcen: Um sicherzustellen, dass die richtige Ressource importiert wird, überprüft Version3.0 die Ressourcen-ID direkt beim Import. Bei einer Abweichung gibt es das erwartete Format zurück. Dadurch wird sichergestellt, dass z. B. eine ID für eine virtuelle Maschine angegeben wird und nicht die VM-Erweiterungs-ID.
- Application-Gateway: Durch die Änderung verschachtelter Elemente von List auf Set spielt die Reihenfolge der Elemente nun keine Rolle mehr. Dies kann bei der Referenzierung zu bestehenden verschachtelten Elementen in Ihrer Terraform-Konfiguration einige Codeänderungen erforderlich machen.

- API-Management: Wie es bei anderen Terraform-Providern bereits der Fall ist, entfernt Terraform mit der AzureRM 3.0 Version auch hier die Standard-API und die Produkte für das API-Management, wenn eine neue API-Management-Instanz erstellt wird.
- Firewall: Anders als bei den Application Gateways werden die verschachtelten Elemente, wo nötig, von Sets auf List geändert. Das bedeutet wiederum, dass die Reihenfolge dieser Elemente eine zu beachtende Rolle spielt. Auch hier wird es einige Anpassungen an Ihrem bestehenden Code erfordern, wenn Sie diese verschachtelten Elemente in Ihrer Terraform-Konfiguration referenzieren.

![Werbungsbanner](images/Advertiser1.png)

### Wir bieten "Terraform für Azure" Training

[](https://thinkport.digital/cloud-excellence-workshops/)

- Ressourcengruppen: Vor dem Löschen einer Ressourcengruppe, prüft Terraform mit der Version3.0 nun, ob diese verschachtelt ist. Und löst einen Fehler aus, sofern ein Element gefunden wurde. Dieses Verhalten ist im Funktionsblock konfigurierbar und ist standardmäßig auf aktiv gesetzt. Es kann aber, wie bisher, auch wieder deaktiviert werden.
- Speicherung: Auch in diesem Bereich gab es Änderungen. Zum Beispiel wurde das field “allow_blob_public_access” in “allow_nested_items_to_be_public” umbenannt. In der Vergangenheit führte die bisherige (etwas ungenaue) Bezeichnung oft zu Verwirrungen. “allow_nested_items_to_be_public” gibt an, was die Bezeichnung verspricht: Elemente innerhalb eines Speicherkontos der Öffentlichkeit können zugänglich gemacht werden. Und eben nicht, dass alle Ressourcen innerhalb dieses Speicherkontos standardmäßig öffentlich werden.

Des Weiteren wurde mit der neuen Version 3.0 ebenfalls eine große Anzahl von veralteten Ressourcen, Datenquellen und Feldern entfernt. Auf diese sind wir in diesem Artikel nicht eingegangen. Eine vollständige Liste der veralteten Ressourcen und Felder sowie eine Upgrade-Anleitung sind unter dem folgendem **[Link](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/3.0-upgrade-guide#removal-of-deprecated-fields-data-sources-and-resources)** verfügbar.

## [Weitere Beiträge](https://thinkport.digital/blog)

[![Reasons Why (2)](images/Reasons-Why-2.png 'Reasons Why (2)')](https://thinkport.digital/practical-tips-and-tricks-on-how-to-use-typography-in-ui-design/)

### [Practical Tips and Tricks on How to Use Typography in UI Design](https://thinkport.digital/practical-tips-and-tricks-on-how-to-use-typography-in-ui-design/ 'Practical Tips and Tricks on How to Use Typography in UI Design')

[Big Data](https://thinkport.digital/category/big-data/)

### [Practical Tips and Tricks on How to Use Typography in UI Design](https://thinkport.digital/practical-tips-and-tricks-on-how-to-use-typography-in-ui-design/ 'Practical Tips and Tricks on How to Use Typography in UI Design')

[Big Data](https://thinkport.digital/category/big-data/)

[![Hack with (5)](images/Hack-with-5.png 'Hack with (5)')](https://thinkport.digital/aws-elastic-beanstalk-2/)

### [AWS Elastic Beanstalk](https://thinkport.digital/aws-elastic-beanstalk-2/ 'AWS Elastic Beanstalk')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [AWS Elastic Beanstalk](https://thinkport.digital/aws-elastic-beanstalk-2/ 'AWS Elastic Beanstalk')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [Kublr bringt Rolling-Updates für Kubernetes](https://thinkport.digital/kublr-rolling-updates-fuer-kubernetes/ 'Kublr bringt Rolling-Updates für Kubernetes')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/), [Cloud Kubernetes](https://thinkport.digital/category/cloud-kubernetes/)

### [Kublr bringt Rolling-Updates für Kubernetes](https://thinkport.digital/kublr-rolling-updates-fuer-kubernetes/ 'Kublr bringt Rolling-Updates für Kubernetes')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/), [Cloud Kubernetes](https://thinkport.digital/category/cloud-kubernetes/)

[![OpenMaps](images/OpenMaps-1024x696.png 'picture blog post testdata open maps')](https://thinkport.digital/testdaten-generieren-mithilfe-von-openmaps/)

### [Testdaten generieren mithilfe von Openmaps](https://thinkport.digital/testdaten-generieren-mithilfe-von-openmaps/ 'Testdaten generieren mithilfe von Openmaps')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [Testdaten generieren mithilfe von Openmaps](https://thinkport.digital/testdaten-generieren-mithilfe-von-openmaps/ 'Testdaten generieren mithilfe von Openmaps')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

[![Hack with (3)](images/Hack-with-3.png 'Hack with (3)')](https://thinkport.digital/aws-iam/)

### [AWS Identity and Access Management](https://thinkport.digital/aws-iam/ 'AWS Identity and Access Management')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [AWS Identity and Access Management](https://thinkport.digital/aws-iam/ 'AWS Identity and Access Management')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [IT-Automatisierung als Antwort gegen die Corona-Krise](https://thinkport.digital/it-automatisierung-als-antwort-gegen-die-corona-krise/ 'IT-Automatisierung als Antwort gegen die Corona-Krise')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/), [Big Data](https://thinkport.digital/category/big-data/)

### [IT-Automatisierung als Antwort gegen die Corona-Krise](https://thinkport.digital/it-automatisierung-als-antwort-gegen-die-corona-krise/ 'IT-Automatisierung als Antwort gegen die Corona-Krise')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/), [Big Data](https://thinkport.digital/category/big-data/)

## Blog Kurator

![portrait Christina](images/Christina.png)

### Christina Friede

### Business Development

## Email:

## [cfriede@thinkport.digital](mailto:cfriede@thinkport.digital)

- [](https://www.linkedin.com/in/christina-friede-2a6426168/)
