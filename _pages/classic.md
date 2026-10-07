---
permalink: /classic/
title: "Hongzhan Lin"
seo_title: "Hongzhan Lin (林鸿展) | Research Fellow at NUS"
author_profile: true
site_variant: classic
excerpt: "Hongzhan Lin is a Research Fellow at the National University of Singapore working on natural language processing, multimodal reasoning, and social computing."
---

☀️About Me
======

I am Hongzhan Lin (林鸿展), a Research Fellow at the [Centre for Trusted Internet and Community (CTIC)](https://ctic.nus.edu.sg/), National University of Singapore. I work closely with [Prof. Mong-Li Lee](https://www.comp.nus.edu.sg/~leeml/) (Director of CTIC), [Prof. Wynne Hsu](https://www.comp.nus.edu.sg/~whsu/) (Director of IDS), and [Prof. Tat-Seng Chua](https://www.comp.nus.edu.sg/~chuats/) (Director of NExT++).

I received my PhD from the NLP Group at Hong Kong Baptist University in 2026, advised by [Prof. Jing Ma](https://majingcuhk.github.io/). From 2024 to 2025, I was a visiting PhD student at the [NExT++ Research Centre](https://www.nextcenter.org) at NUS under the guidance of [Prof. Tat-Seng Chua](https://www.comp.nus.edu.sg/~chuats/).

Before that, I earned my bachelor's and master's degrees from the PRIS Lab at Beijing University of Posts and Telecommunications in 2019 and 2022, advised by [Prof. Guang Chen](https://x.com/fly51fly). Earlier in my career, I worked as an NLP research intern at Tencent AI Lab.

🔬Research Interests
======

My work focuses on reliable and interpretable AI systems for language, visual content, and online communities.

- **Trustworthy Language Models:** Dynamic fact-checking, model evaluation, and methods that make language-model decisions more accountable.
- **Multimodal Reasoning:** Reasoning across text and images to understand nuanced, implicit, and potentially harmful online content.
- **Social Computing:** Computational approaches to misinformation, rumors, and the dynamics of information in online communities.

📢Current Highlights
======

- **Latest work:** [SafeAct: How Tool-Using Agents Fail](https://safeact.github.io/)
- **Community:** [ACM WebSci '27](https://websci27.webscience.org), Web & Registration Chair
- **Opportunities:** I welcome collaborations, NUS master and bachelor interns, and visiting PhD students interested in projects at CTIC. Remote collaboration is also welcome.

📚Academic Experience
======

- Research Fellow, Centre for Trusted Internet and Community, National University of Singapore [2026 - Present]
- Visiting PhD Student, NExT++ Research Centre, National University of Singapore [2024 - 2025]
- PhD in Computer Science, Hong Kong Baptist University [2022 - 2026]
- Master in Artificial Intelligence, Beijing University of Posts and Telecommunications [2019 - 2022]

📑Selected Publications
======

{% for pub in site.data.selected_publications %}
- **{{ pub.title }}**<br>
  {{ pub.authors | replace: "Hongzhan Lin", "**Hongzhan Lin**" }}<br>
  *{{ pub.venue }}{% if pub.highlight %} ({{ pub.highlight }}){% endif %}*{% if pub.links %}. {% for link in pub.links %}[[{{ link.label }}]({{ link.url }})]{% unless forloop.last %} {% endunless %}{% endfor %}{% endif %}
{% endfor %}

🏅Honors and Research Support
======

- Rising Star Award, BESC (2026)
- Best Student Paper Nominee, INTERSPEECH (2026)
- RPg Research Performance Award, HKBU (2023–2025)
- Outstanding Graduate of Beijing, Beijing Municipal Education Commission (2019)
- **NUS HPC Compute Grant** (2026–2027): *Causal Integration of Distributed Evidence in Video Models*

💁‍♂️Professional Services
======

- Conference Organiser: [ACM WebSci '27](https://websci27.webscience.org) (Web & Registration Chair)
- Conference Area Chair: ACL, EMNLP, NeurIPS, AAAI, EACL, AACL
- Conference Reviewer: ACL, EMNLP, WWW, AAAI, NeurIPS, ICLR, CVPR, NAACL, COLING, ACM MM, IJCAI, ECAI
- Journal Reviewer: TPAMI, TKDE, TOIS, CL, TOMM, TCSS, TCSVT, TALLIP, JAIR, EAAI, ESWA
