---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<p>Yonghyeon Jeon<br>
Postdoctoral Research Associate<br>
Department of Mathematical Sciences, UNIST<br>
Ulsan, South Korea</p>

[Download CV (PDF)](/files/Yonghyeon_Jeon_CV.pdf)

Research Interests
======

- **Numerical Analysis:** Fractional differential equations; Partial differential equations
- **Machine Learning:** Time Series; Machine Learning; Physical-informed Neural Network; Neural Network Architecture
- **Fractional Calculus:** Time Series; Caputo; Fractional differential equation

Career
======

- **September 2024–Present:** Postdoctoral Research Associate, Department of Mathematical Sciences, UNIST, Ulsan, South Korea
- **September 2022–August 2024:** Postdoctoral Research Associate, Mechatronics Research Center, Hongik University, Sejong, South Korea

Education
======

- **Ph.D. in Mathematics, Department of Mathematics**, Kyungpook National University, Daegu, South Korea, March 2016–August 2022
  - GPA: 3.84/4.0
  - Thesis: [Two Approaches of semi-Lagrangian Scheme for Solving Unsteady Coupled Burgers' Equations](https://dcollection.knu.ac.kr/public_resource/pdf/000000102153_20220822214901.pdf)
  - Adviser: Prof. Philsu Kim
- **Master of Science, Department of Mathematics**, Kyungpook National University, Daegu, South Korea, March 2014–February 2016
  - GPA: 3.74/4.0
  - Thesis: [A Variable Order Method for Solving Stiff Initial Value Problems](https://dcollection.knu.ac.kr/public_resource/pdf/000000067259_20220622162527.pdf)
  - Advisers: Prof. Philsu Kim and Prof. Sang Dong Kim
- **Bachelor of Science, Department of Mathematics**, Kyungpook National University, Daegu, South Korea, March 2008–February 2014
  - GPA: 3.44/4.0
  - Adviser: Prof. Eun Sup Kim

Publications
======

<ul>
{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>

Talks
======

<ul>
{% for post in site.talks reversed %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a><br>
    {{ post.venue }}, {{ post.location }} — {{ post.date | date: "%B %Y" }}
  </li>
{% endfor %}
</ul>

Teaching
======

<ul>
{% for post in site.teaching reversed %}
  <li>
    <strong>{{ post.period }}</strong>: <a href="{{ post.url | relative_url }}">{{ post.title }}</a>{% if post.course %} — {{ post.role }}{% endif %}<br>
    Duties: {{ post.duties }}
  </li>
{% endfor %}
</ul>

Grant, Scholarship and Award
======

- Supported by the Basic Science Research Program through the National Research Foundation of Korea (NRF), funded by the Korean government (MSIT), grant number RS-2023-00237912, June 2023–May 2026

Computer Skills
======

MATLAB, MATHEMATICA, C/C++, Python, LaTeX
