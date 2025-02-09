---
title: 'AWS Elastic Compute Cloud'
publishDate: 2018-11-15T10:00:00Z
categories: + "aws-cloud"
coverImage: 'Hack-with.png'
---

[![Thinkport Logo](images/Logo_horizontral_new.png)](https://thinkport.digital)[![Thinkport Logo](images/Logo_horizontral_new.png)](https://thinkport.digital)

## AWS Elastic Compute Cloud

## CLOUD Amazon web services

# Hack with AWS EC2

[Linkedin](https://www.linkedin.com/company/11759873) [Instagram](https://www.instagram.com/thinkport/) [Youtube](https://www.youtube.com/channel/UCnke3WYRT6bxuMK2t4jw2qQ) [Envelope](mailto:tdrechsel@thinkport.digital)[](#linksection)

Amazon Web Services (Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.

Amazon EC2’s simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon’s proven computing environment. Amazon EC2 reduces the time required to obtain and boot new server instances to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change. Amazon EC2 changes the economics of computing by allowing you to pay only for capacity that you actually use. Amazon EC2 provides developers the tools to build failure resilient applications and isolate them from common failure scenarios.

**When to Use**

There are times when one is limited by the capabilities of a desktop or laptop. Suppose a data scientist has a large dataset that they would like to do some analysis on. The scientist proceeds to try and load the entire dataset into memory and an error like the one below occurs.

```
> data <- read.csv(file = 'massiveFile.csv')Error: cannot allocate vector of size 500.0Mb
```

The error resulted because the available RAM was exhausted. The operating system couldn't allocate another 500Mb of RAM. While there are many different solutions to this type of problem, one possible solution could be to upgrade the RAM of the computer. Besides having to make an investment in more RAM, there are limits to how far some computers can be upgraded. The potential solution explored in this tutorial is to use a virtual machine in the cloud (AWS) with more RAM and CPU.

Virtual machines on AWS EC2, also called instances, have many advantages. A few of the advantages include being highly scalable (one can choose instances with more RAM, CPU etc), they are easy to start and stop (outside the free tier, customers pay for what they use), and they allow for the selection of different platforms (operating systems). An important point thing to emphasize is that although this tutorial covers how to launch a Windows based virtual machine, there are many different types of virtual machines for many different purposes.

**Features**

Amazon EC2 provides the following features:

    •    Virtual computing environments, known as instances

    •    Preconfigured templates for your instances, known as Amazon Machine Images (AMIs), that package the bits you need for your server (including the operating system and additional software)

    •    Various configurations of CPU, memory, storage, and networking capacity for your instances, known as instance types

    •    Secure login information for your instances using key pairs (AWS stores the public key, and you store the private key in a secure place)

    •    Storage volumes for temporary data that's deleted when you stop or terminate your instance, known as instance store volumes

    •    Persistent storage volumes for your data using Amazon Elastic Block Store (Amazon EBS), known as Amazon EBS volumes

    •    Multiple physical locations for your resources, such as instances and Amazon EBS volumes, known as regions and Availability Zones

    •    A firewall that enables you to specify the protocols, ports, and source IP ranges that can reach your instances using security group

    •    Static IPv4 addresses for dynamic cloud computing, known as Elastic IP addresses

    •    Metadata, known as tags, that you can create and assign to your Amazon EC2 resources

    •    Virtual networks you can create that are logically isolated from the rest of the AWS cloud, and that you can optionally connect to your own network, known as virtual private clouds (VPCs)

**Benefits**

    •    Elastic Web-Scale Computing: Amazon EC2 enables you to increase or decrease capacity within minutes, not hours or days. You can commission one, hundreds, or even thousands of server instances simultaneously.

    •    Completely controlled: You have complete control of your instances including root access and the ability to interact with them as you would with any machine.

    •    Flexible Cloud Hosting Services: You have the choice of multiple instance types, operating systems, and software packages. Amazon EC2 allows you to select a configuration of memory, CPU, instance storage, and the boot partition size that is optimal for your choice of operating system and application.

    •    Integrated: Amazon EC2 is integrated with most AWS services such as Amazon Simple Storage Service (Amazon S3), Amazon Relational Database Service (Amazon RDS), and Amazon Virtual Private Cloud (Amazon VPC) to provide a complete, secure solution for computing, query processing, and cloud storage across a wide range of applications.

    •    Reliable: Amazon EC2 offers a highly reliable environment where replacement instances can be rapidly and predictably commissioned.

    •    Secure: Cloud security at AWS is the highest priority. As an AWS customer, you will benefit from a data center and network architecture built to meet the requirements of the most security-sensitive organizations.

    •    Inexpensive: Amazon EC2 passes on to you the financial benefits of Amazon’s scale. You pay a very low rate for the compute capacity you actually consume.

**Getting Started**

Basic tutorial on how to get started with ec2 can be found below.

[https://aws.amazon.com/ec2/getting-started/](https://aws.amazon.com/ec2/getting-started/)

Video tutorials  
[https://www.youtube.com/watch?v=8TlukLu11Yo](https://www.youtube.com/watch?v=8TlukLu11Yo)  
**  
Best Practices**

Once you are clear with the basic stuff, to know in depth about how to utilize ec2 completely you can refer to the best practices of ec2 under the following link.

[https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-best-practices.html](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-best-practices.html)

## Pricing

Amazon EC2 is free to try. There are four ways to pay for Amazon EC2 instances: On-Demand, Reserved Instances, and Spot Instances. You can also pay for Dedicated Hosts which provide you with EC2 instance capacity on physical servers dedicated for your use. For more details follow the below link.

[https://aws.amazon.com/ec2/pricing/](https://aws.amazon.com/ec2/pricing/)

## [Weitere Beiträge](https://thinkport.digital/blog)

### [IT-Automatisierung als Antwort gegen die Corona-Krise](https://thinkport.digital/it-automatisierung-als-antwort-gegen-die-corona-krise/ 'IT-Automatisierung als Antwort gegen die Corona-Krise')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/), [Big Data](https://thinkport.digital/category/big-data/)

### [IT-Automatisierung als Antwort gegen die Corona-Krise](https://thinkport.digital/it-automatisierung-als-antwort-gegen-die-corona-krise/ 'IT-Automatisierung als Antwort gegen die Corona-Krise')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/), [Big Data](https://thinkport.digital/category/big-data/)

[![GreatUI](images/Kopie-von-Hack-with.png 'GreatUI')](https://thinkport.digital/7-golden-rules-for-creating-great-ui/)

### [7 Golden Rules for Creating Great UI](https://thinkport.digital/7-golden-rules-for-creating-great-ui/ '7 Golden Rules for Creating Great UI')

[Frontend](https://thinkport.digital/category/frontend/)

### [7 Golden Rules for Creating Great UI](https://thinkport.digital/7-golden-rules-for-creating-great-ui/ '7 Golden Rules for Creating Great UI')

[Frontend](https://thinkport.digital/category/frontend/)

[![Kafka](images/Kafka-1024x696.png 'blog post kafka 2.7')](https://thinkport.digital/kafka-2-7-update/)

### [Was Sie über Kafka 2.7 wissen sollten](https://thinkport.digital/kafka-2-7-update/ 'Was Sie über Kafka 2.7 wissen sollten')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [Was Sie über Kafka 2.7 wissen sollten](https://thinkport.digital/kafka-2-7-update/ 'Was Sie über Kafka 2.7 wissen sollten')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

[![Airflow on AWS](images/Kafka-1-1024x696.png 'picture blog post Airflow')](https://thinkport.digital/how-to-deploy-airflow-on-aws/)

### [Three ways to deploy Airflow on AWS](https://thinkport.digital/how-to-deploy-airflow-on-aws/ 'Three ways to deploy Airflow on AWS')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [Three ways to deploy Airflow on AWS](https://thinkport.digital/how-to-deploy-airflow-on-aws/ 'Three ways to deploy Airflow on AWS')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

[![Kopie von Hack with (4)](images/Kopie-von-Hack-with-4.png 'Kopie von Hack with (4)')](https://thinkport.digital/16-things-to-avoid-when-writing-for-your-ui/)

### [16 Things to Avoid When Writing For Your UI](https://thinkport.digital/16-things-to-avoid-when-writing-for-your-ui/ '16 Things to Avoid When Writing For Your UI')

[Frontend](https://thinkport.digital/category/frontend/)

### [16 Things to Avoid When Writing For Your UI](https://thinkport.digital/16-things-to-avoid-when-writing-for-your-ui/ '16 Things to Avoid When Writing For Your UI')

[Frontend](https://thinkport.digital/category/frontend/)

[![Hack with](images/Hack-with.png 'Hack with')](https://thinkport.digital/aws-ec2-3/)

### [AWS EC2](https://thinkport.digital/aws-ec2-3/ 'AWS EC2')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

### [AWS EC2](https://thinkport.digital/aws-ec2-3/ 'AWS EC2')

[AWS Cloud](https://thinkport.digital/category/aws-cloud/)

## Blog Kurator

![portrait Christina](images/Christina.png)

### Christina Friede

### Business Development

## Email:

## [cfriede@thinkport.digital](mailto:cfriede@thinkport.digital)

- [](https://www.linkedin.com/in/christina-friede-2a6426168/)
