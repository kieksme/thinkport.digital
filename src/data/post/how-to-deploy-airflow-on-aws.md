---
title: "Three ways to deploy Airflow on AWS"
publishDate: 2021-07-30T10:00:00Z
categories: 
  + "aws-cloud"
coverImage: "Kafka-1.png"
---

 [![Thinkport Logo](images/Logo_horizontral_new-ovavzp5ztqmosy1yz1jrwr9fv5swhtoc0bky3tkc3g.png "Logo Bright Colours")](https://thinkport.digital)[![Thinkport Logo](images/Logo_horizontral_new-ovavzp5ztqmosy1yz1jrwr9fv5swhtoc0bky3tkc3g.png "Logo Bright Colours")](https://thinkport.digital)

Airflow on AWS

# 3 Ways to deploy Airflow on AWS

[Linkedin](https://www.linkedin.com/company/11759873) [Instagram](https://www.instagram.com/thinkport/) [Youtube](https://www.youtube.com/channel/UCnke3WYRT6bxuMK2t4jw2qQ) [Envelope](mailto:tdrechsel@thinkport.digital)[](#linksection)

#####   

There are various deployment approaches available for Airflow. It includes deployment of all components on a single VM or deployment of different components on separate single or load-balanced VMs. Some of the components of the Airflow, such as the Task creation and monitoring UI, need a webserver and other components, such as the scheduler and executor, need a  
native runtime of Python. The choice of deployment model is driven by the concerns such as performance, availability, and scalability. The focus is always on the scheduler and executor components because they carry out the main workload of  
Apache Airflow and need clustering and autoscaling.

  

##### **What options are available to deploy Airflow on AWS?** 

AWS provides a variety of options for deploying Airflow that can be categorized under IaaS, PaaS, as well as SaaS.

  

##### Deploy Airflow on AWS EKS

Kubernetes is the proven solution for auto-scaling,  elasticity, and automatic resource management. There is a huge community supporting Kubernetes initiatives and hence several ready-to-use configuration files are available for deploying Airflow using EKS. EKS keeps spawning new nodes with the Airflow executor or scheduler for handling new and heavy workloads.

 The biggest drawback in the setup is that the cost for the smaller workloads may turn out to be higher. Depending on the variety of tasks and their resource requirements, EKS may need to launch a greater number of instances without maximum utilization of each node, leading to increased costs.

  

##### Deploy Airflow on AWS EC2

Deployment of Airflow on EC2 is almost the same as you would deploy on an on-premises VM: sweet and simple, old-style deployment, pre-configured capacity, fixed nodes in the cluster, and pre-determined load balancing. A set of dedicated EC2 instances takes care of the webserver components and another set of EC2 instances host the scheduler and executors.

 This deployment model offers little dynamism in terms of scale-up or scale-down and the availability of the solution depends on the number of upfront provisioned instances. It works well in a scenario where workloads are fairly fixed and growth is minimal or constant. It cannot handle load spikes at all.

##### Use the Managed Airflow service on AWS

Amazon Managed Workflows for Apache Airflow (MWAA) is a managed orchestration service in its nascent state as of now in 2021. It is a SaaS offering that promises to address the most common concerns around scalability,  availability, and security. Like any other service, it is easy to start, however,  it is not industry-proven yet.

It has the power to become one of the most sought-after deployment models of Airflow because it is pre-integrated with other proven services of AWS, such as Amazon S3, CloudWatch, IAM, and others.  

  

##### Our recommendation

When you are moving your Airflow solution on the AWS cloud,  we recommend evaluating the option to use EKS orchestration. It would require you to analyze and determine the sizes and frequency of workloads. Careful planning of instance sizes can help you optimize your costs and utilize the instances to their maximum capacity.

_**Thinkport** is a dynamic and constantly growing cloud consulting company, with the goal of developing innovative technologies and solutions in the field of cloud computing. As a certified Microsoft Gold Platform Partner, we work closely with Microsoft, in the Azure cloud environment, and also have certified expertise with Amazon Web Services._

_Our strengths and expertise lie in the areas of Multi-Cloud, Data Lakes, Big Data, AI and Event-Driven Architectures (Hadoop, Kafka, Solace) and Terraform. To get further insight about our services, feel free to visit our website and newly updated [**workshop page**](https://thinkport.digital/cloud-excellence-workshops/)._

## [Weitere Beiträge](https://thinkport.digital/blog)

[![Kopie von Hack with (4)](images/Kopie-von-Hack-with-4.png "Kopie von Hack with (4)")](https://thinkport.digital/16-things-to-avoid-when-writing-for-your-ui/)

### [16 Things to Avoid When Writing For Your UI](https://thinkport.digital/16-things-to-avoid-when-writing-for-your-ui/ "16 Things to Avoid When Writing For Your UI")

[Frontend](https://thinkport.digital/category/frontend/)

### [16 Things to Avoid When Writing For Your UI](https://thinkport.digital/16-things-to-avoid-when-writing-for-your-ui/ "16 Things to Avoid When Writing For Your UI")

[Frontend](https://thinkport.digital/category/frontend/)

[![Reasons Why (2)](images/Reasons-Why-2.png "Reasons Why (2)")](https://thinkport.digital/practical-tips-and-tricks-on-how-to-use-typography-in-ui-design/)

### [Practical Tips and Tricks on How to Use Typography in UI Design](https://thinkport.digital/practical-tips-and-tricks-on-how-to-use-typography-in-ui-design/ "Practical Tips and Tricks on How to Use Typography in UI Design")

[Big Data](https://thinkport.digital/category/big-data/)

### [Practical Tips and Tricks on How to Use Typography in UI Design](https://thinkport.digital/practical-tips-and-tricks-on-how-to-use-typography-in-ui-design/ "Practical Tips and Tricks on How to Use Typography in UI Design")

[Big Data](https://thinkport.digital/category/big-data/)

[![Hack with (4)](images/Hack-with-4.png "Hack with (4)")](https://thinkport.digital/aws-rds/)

### [AWS Relational Database Service](https://thinkport.digital/aws-rds/ "AWS Relational Database Service")

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [AWS Relational Database Service](https://thinkport.digital/aws-rds/ "AWS Relational Database Service")

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

[![Terrafrom eines der besten DvOps Tools (1)](images/Terrafrom-eines-der-besten-DvOps-Tools-1-1024x696.png "Terraform_DevOps Tools")](https://thinkport.digital/warum-terraform-einer-ihrer-devops-tools-sein-sollte/)

### [Warum Terraform eines Ihrer DevOps Tools sein sollte](https://thinkport.digital/warum-terraform-einer-ihrer-devops-tools-sein-sollte/ "Warum Terraform eines Ihrer DevOps Tools sein sollte")

[AWS Cloud](https://thinkport.digital/category/aws-cloud/), [IaC](https://thinkport.digital/category/iac/)

### [Warum Terraform eines Ihrer DevOps Tools sein sollte](https://thinkport.digital/warum-terraform-einer-ihrer-devops-tools-sein-sollte/ "Warum Terraform eines Ihrer DevOps Tools sein sollte")

[AWS Cloud](https://thinkport.digital/category/aws-cloud/), [IaC](https://thinkport.digital/category/iac/)

[![4](images/4-2.png "4")](https://thinkport.digital/the-6-most-important-things-i-have-learned-in-my-6-months-using-server-less/)

### [The 6 Most Important Things I have learned in my 6 Months using Server-less](https://thinkport.digital/the-6-most-important-things-i-have-learned-in-my-6-months-using-server-less/ "The 6 Most Important Things I have learned in my 6 Months using Server-less")

[Big Data](https://thinkport.digital/category/big-data/)

### [The 6 Most Important Things I have learned in my 6 Months using Server-less](https://thinkport.digital/the-6-most-important-things-i-have-learned-in-my-6-months-using-server-less/ "The 6 Most Important Things I have learned in my 6 Months using Server-less")

[Big Data](https://thinkport.digital/category/big-data/)

[![Kopie von Hack with (3)](images/Kopie-von-Hack-with-3.png "Kopie von Hack with (3)")](https://thinkport.digital/cheat-sheets-for-ai-machine-learning-neural-networks-big-data-deep-learning/)

### [Cheat Sheets for AI, Machine Learning, Neural Networks, Big Data & Deep Learning](https://thinkport.digital/cheat-sheets-for-ai-machine-learning-neural-networks-big-data-deep-learning/ "Cheat Sheets for AI, Machine Learning, Neural Networks, Big Data & Deep Learning")

[Disrupt](https://thinkport.digital/category/disrupt/)

### [Cheat Sheets for AI, Machine Learning, Neural Networks, Big Data & Deep Learning](https://thinkport.digital/cheat-sheets-for-ai-machine-learning-neural-networks-big-data-deep-learning/ "Cheat Sheets for AI, Machine Learning, Neural Networks, Big Data & Deep Learning")

[Disrupt](https://thinkport.digital/category/disrupt/)

## Blog Kurator

![portrait Christina](images/Christina.png)

### Christina Friede

### Business Development

## Email:

## [cfriede@thinkport.digital](mailto:cfriede@thinkport.digital)

* [](https://www.linkedin.com/in/christina-friede-2a6426168/)
