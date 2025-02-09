---
title: "Setup Hashicorp Nomad Ansible fail2ban"
publishDate: 2024-01-19T10:00:00Z
categories: 
  + "cloud-general"
coverImage: "4.webp"
---

# Setup von Hashicorp Nomad - 

Schritt 2.2: Ansible - fail2ban

Der Artikel fokussiert auf das Setup von Nomad, beginnend mit einem überblickgebenden Einführungstext, gefolgt von einer konkreten Folge von Schritten, die in einzelnen Blockartikeln inklusive exakter Anweisungen beschrieben werden.  Die Artikel bauen aufeinander auf,   können allerdings je nach Bedarf auch übersprungen werden.

[![nomad setup teaser](images/nomad-setup-1024x683.webp)](https://thinkport.digital/setup-von-hashicorp-nomad/)

[Setup von Hashicorp Nomad](https://thinkport.digital/setup-von-hashicorp-nomad/)

 

![terraform verlinken teaser](images/terraform-verlinken-1024x683.webp)

[Schritt 1:  
Terrafom](https://thinkport.digital/setup-hashcorp-nomad-mit-terraform) [![ansible teaser](images/ansible-1024x683.webp) ](https://thinkport.digital/setup-hashicorp-nomad-mit-ansible/)[Schritt 2:  
Ansible](https://thinkport.digital/setup-hashicorp-nomad-mit-ansible/) [![ufw teaser](images/5-1024x683.webp)](https://thinkport.digital/setup-hashicorp-nomad-ansible-ufw/)

[Schritt 2.1:  
Ansible - ufw](https://thinkport.digital/setup-hashicorp-nomad-ansible-ufw/)

![fail2bail teaser](images/4-1024x683.webp)

 Schritt 2.2:  
Ansible - fail2ban [![rolle nomad teaser](images/6-1024x683.webp)](https://thinkport.digital/setup-hashicorp-nomad-ansible-nomad/%20)

[Schritt 3:  
Ansible - nomad](https://thinkport.digital/setup-hashicorp-nomad-ansible-nomad/)

[![rolle consul teaser](images/7-1024x683.webp)](https://thinkport.digital/setup-hashicorp-nomad-ansible-consul/)

[Schritt 4:  
Ansible - consul](https://thinkport.digital/setup-hashicorp-nomad-ansible-consul/)

Wir haben vorhin bereits einen Command namens `ansible-galaxy` ausgeführt. Nun gehen wir darauf ein was diese Ansible Galaxy eigentlich ist.

[Ansible Galaxie](https://galaxy.ansible.com/ "https://galaxy.ansible.com/") ist ein webbasiertes Open-Source-Online-Repository für Ansible-Inhalte (hauptsächlich Rollen und Sammlungen).

Collections (Sammlungen) sind ähnlich zu Rollen, nur haben sie einen größeren Umfang. Sie umfassen nicht nur Rollen, sondern auch Playbooks, Module oder Plugins.

Es gibt also für viele Anwendungsfälle bereits Rollen von anderen Entwickler\*innen die wir einfach benutzen aus der Ansible Galaxy ziehen können. Dazu müssen wir die Rollen aber zuerst installieren. Da wir die benötigten Rollen dokumentieren wollen, erstellen wir im Ordner `roles` eine Datei namens `requirements.yml` . Dort fügen wird dann folgenden Code ein:

				
					 `--- - src: oefenweb.fail2ban     name: fail2ban`

				
			

Über `src` geben wir an woher wir die Rolle beziehen möchten. In unserem Fall verwenden wir hier eine Rolle von Ansible Galaxy, daher geben wir `username.rolename` an (in diesem Fall `oefenweb.fail2ban` ). Danach vergeben wir noch einen spezifischen Namen zum späteren Aufruf im Playbook, denn dort müssen wir diese Rolle wieder unter `roles` einbinden, wie auch bei der `ufw` Rolle. Es gibt auch die Möglichkeit eine spezielle Version der Rolle/Kollektion mit dem `version:` Tag auszuwählen.  
Zuerst installieren wir aber unsere Requirements mit folgendem Befehl: `ansible-galaxy install -r requirements.yml` dadurch werden alle in der `requirements.yml` befindlichen Rollen installiert.

Die Rollen können dabei nicht von Ansible Galaxy kommen, sondern auch von einem Github-Repo, einem lokal geklonten Git-Repo, WebServer wo die Rolle als tar.gz/bz2/xz. Datei abgelegt ist oder anderen Git Repositories (wie BitBucket, Gitlab, AzureDevOps)

Nun fügen wir die installiere Rolle also in unser Playbook ein, das sollte dann so aussehen:

				
					 `--- - hosts: azure_nomad_vms     become: yes     roles:         - ufw         - fail2ban     vars:         failed2ban_services:             - name: sshd                 port: 22                 maxretry: 5                 bantime: 60         ufw_apps_allow:             - OpenSSH # ufw_ports_allow:`

				
			

Wir fügen also den `name` Wert der `oefenweb.fail2ban` Rolle in den `roles` Block ein. Danach können wir dann auch den sshd Port mit einem Schutz versehen.

Durch diese Einstellung wird ein Angreifer für 1 Minute gesperrt, sofern er 5 mal das falsche Passwort bzw. den falschen SSH-Schlüssel angibt.

## Autoren:

![Portrait Keith](images/keith-1-1-300x300.webp)

## Keith Schuijlenburg

_Cloud Architect_

[](https://www.linkedin.com/in/keith-schuijlenburg-a67289142/)

![Jonas portrait](images/Jonas-1-300x300.png)

## Jonas Budde

_Cloud Engineer_

[](https://www.linkedin.com/in/jonas-budde/)

![Aleksandra Portrait](images/aleksandra-2-300x300.webp)

## Aleksandra Bury

_Cloud Engineer_

[](https://www.linkedin.com/in/aleksandra-bury-40849822a/)

## [Weitere Beiträge](https://thinkport.digital/blog)

[![Optimizing Kafka](images/Optimizing-Kafka.png "Vor dem rotem Hintergrundbild eines Zahnrads steht der Schriftzug "Optimizing Kafka".")](https://thinkport.digital/optimizing-kafka/)

### [Optimizing Kafka](https://thinkport.digital/optimizing-kafka/ "Optimizing Kafka")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Streaming](https://thinkport.digital/category/streaming/)

### [Optimizing Kafka](https://thinkport.digital/optimizing-kafka/ "Optimizing Kafka")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Streaming](https://thinkport.digital/category/streaming/)

[![Was bietet Azure](images/Was-bietet-Azure-2.png "Titelbild, auf dem vor dem blauen Hintergund das Azure Logo mittig abgebildet ist und drum herum sind sechs weiße Icons für verschiedenen Services abgebildet.")](https://thinkport.digital/was-ist-azure/)

### [Was ist Azure](https://thinkport.digital/was-ist-azure/ "Was ist Azure")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Streaming](https://thinkport.digital/category/streaming/)

### [Was ist Azure](https://thinkport.digital/was-ist-azure/ "Was ist Azure")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Streaming](https://thinkport.digital/category/streaming/)

[![terraform verlinken teaser](images/terraform-verlinken-1024x683.webp "terraform verlinken teaser")](https://thinkport.digital/setup-hashcorp-nomad-mit-terraform/)

### [Setup Hashcorp Nomad mit Terraform](https://thinkport.digital/setup-hashcorp-nomad-mit-terraform/ "Setup Hashcorp Nomad mit Terraform")

[Cloud General](https://thinkport.digital/category/cloud-general/)

### [Setup Hashcorp Nomad mit Terraform](https://thinkport.digital/setup-hashcorp-nomad-mit-terraform/ "Setup Hashcorp Nomad mit Terraform")

[Cloud General](https://thinkport.digital/category/cloud-general/)

[![Kubernetes und Docker](images/Streaming-Services-6.webp "Blauer Hintergrund auf dem sich der Schriftzug "Cloud Consulting mit" und zentral eine orange Wolke befindet, in der sich wiederum in weiß die Logos von Kubernetes und Docker befinden. Unten rechts auf dem Bild befindet sich noch in weiß das Terraform Logo.")](https://thinkport.digital/cloud-consulting-with-kubernetes-and-docker/)

### [Cloud Consulting with Kubernetes and Docker](https://thinkport.digital/cloud-consulting-with-kubernetes-and-docker/ "Cloud Consulting with Kubernetes and Docker")

[Cloud General](https://thinkport.digital/category/cloud-general/)

### [Cloud Consulting with Kubernetes and Docker](https://thinkport.digital/cloud-consulting-with-kubernetes-and-docker/ "Cloud Consulting with Kubernetes and Docker")

[Cloud General](https://thinkport.digital/category/cloud-general/)

[![fail2bail teaser](images/4-1024x683.webp "fail2bail teaser")](https://thinkport.digital/setup-hashicorp-nomad-ansible-fail2ban/)

### [Setup Hashicorp Nomad Ansible fail2ban](https://thinkport.digital/setup-hashicorp-nomad-ansible-fail2ban/ "Setup Hashicorp Nomad Ansible fail2ban")

[Cloud General](https://thinkport.digital/category/cloud-general/)

### [Setup Hashicorp Nomad Ansible fail2ban](https://thinkport.digital/setup-hashicorp-nomad-ansible-fail2ban/ "Setup Hashicorp Nomad Ansible fail2ban")

[Cloud General](https://thinkport.digital/category/cloud-general/)

[![rolle nomad teaser](images/6-1024x683.webp "rolle nomad teaser")](https://thinkport.digital/setup-hashicorp-nomad-ansible-nomad/)

### [Setup Hashicorp Nomad Ansible nomad](https://thinkport.digital/setup-hashicorp-nomad-ansible-nomad/ "Setup Hashicorp Nomad Ansible nomad")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Cloud Kubernetes](https://thinkport.digital/category/cloud-kubernetes/)

### [Setup Hashicorp Nomad Ansible nomad](https://thinkport.digital/setup-hashicorp-nomad-ansible-nomad/ "Setup Hashicorp Nomad Ansible nomad")

[Cloud General](https://thinkport.digital/category/cloud-general/), [Cloud Kubernetes](https://thinkport.digital/category/cloud-kubernetes/)
