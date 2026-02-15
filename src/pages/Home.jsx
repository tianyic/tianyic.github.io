function Home() {
  return (
    <>
      <section id="about">
        <img 
          src="/tianyi_chen_self_photo_4.png" 
          alt="Tianyi Chen Name" 
          className="profile-photo"
        />
        <h2>About</h2>
        <p>
          I am a Principal Researcher and Tech Lead at Microsoft (Applied Sciences Group). My work
          focuses on efficient AI, machine learning systems, AutoML, foundation models, and software–hardware co-design for
          real-world applications. Before joining Microsoft full-time, I completed cross-disciplinary research and engineering internships 
          at Microsoft Research, Amazon, and Citi, and was an early team member at Insilico Medicine, contributing to its growth as a unicorn-stage company.
        </p>
        <p>
          I received my Ph.D. in Applied Mathematics and Statistics from Johns Hopkins University, where I was advised by Prof. Daniel P. Robinson and Prof. Carey E. Priebe, studying numerical optimization. 
          I also earned a Master's degree in Computer Science under the supervision of Prof. Jason Eisner in Johns Hopkins University, and studied at Applied Physics at the University of Washington.
          Prior to that, I obtained my Bachelor's degree in Applied Mathematics from Dalian University of Technology, where I ranked #1 overall and was advised by Prof. Liwei Zhang.
        </p>
        
        <h2>Contact</h2>
        <p>
          Email: tianyichen2020@gmail.com; Tianyi.Chen@microsoft.com
          <br />
          <a href="https://scholar.google.com/citations?user=2BahjdkAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer">[Google Scholar]</a> | 
          <a href="https://github.com/tianyic" target="_blank" rel="noopener noreferrer">[Github]</a> | 
          <a href="https://www.linkedin.com/in/tianyi-chen-b65502b3/" target="_blank" rel="noopener noreferrer">[Linkedin]</a>
        </p>
      </section>

      <section id="research">
        <h2>Research Interest</h2>

        <p>
          My research mainly focuses on <strong>efficient AI</strong>, <strong>numerical optimization</strong>, <strong>machine learning systems</strong>, <strong>autoML</strong>, and <strong>foundation models</strong> for real-world applications.
          I emphasize algorithm–system–hardware co-design, desining algorithms and models with hardware awareness, and implementing them efficiently on modern hardware platforms.
          I also led the <strong>on-device Computer-Using Agent (CUA)</strong> effort at Microsoft, enabling pixel-level interaction and grounded decision-making
          on Windows.
        </p>

        <p><strong>My core research domains include:</strong></p>

        <ul>
          <li>
            <strong>Efficient AI & Numerical Optimization</strong>
            <br />
            Optimization algorithm designs, Structured pruning, sparse activation, quantization-aware training, 
            knowledge distillation, inference acceleration with hardware awareness and kernel optimization. 
            (OTO, WINA, DistiLLM, StableQAT, GETA, LoRAShear, FORA, SparseCNN, etc.).
          </li>

          <li>
            <strong>Computer-Using Agents & Machine Learning System</strong>
            <br />
            On-device agents, agentic knowledge graphs, trajectory generation,
            tool grounding, and scalable evaluation of multimodal agents. LLM continuous pre-training optimization and post training.
            (CUA-KG, PhiGround, WinSpot, etc.).
          </li>

          <li>
            <strong>Vision, Multimodal, and Interactive AI Applications</strong>
            <br />
            Vision–language models, computer vision, multimodal perception, and
            interactive AI systems deployed in production environments.
          </li>
        </ul>
      </section>


      <section id="news">
        <h2>News since 2025</h2>
        <ul className="news-list">
          <li><strong>[Jan 2026]</strong> <span>CUA-Skill preprint is available at <a href="https://arxiv.org/abs/2601.21123">URL</a>.</span></li>
          <li><strong>[Jan 2026]</strong> <span>StableQAT preprint is available at <a href="https://arxiv.org/abs/2601.19320">URL</a>.</span></li>
          <li><strong>[Jan 2026]</strong> <span>WINA is accepted by [ICLR 2026]. <a href="https://www.youtube.com/watch?v=8lg_kIzkYt8">Tutorial on Youtube</a> becomes popular.</span></li>
          <li><strong>[Nov 2025]</strong> <span>ProCrop is accepted by [AAAI 2026].</span></li>
          <li><strong>[July 2025]</strong> <span>PhiGround technical report is released. Featured by Top #2 daily paper on Huggingface.</span></li>
          <li><strong>[June 2025]</strong> <span>DistiLLM-2 is accepted and selected as [ICML 2025] <strong>Oral (Top 1%)</strong>.</span></li>
          <li><strong>[May 2025]</strong> <span>WinSpot is accepted by [ACL Main 2025].</span></li>
          <li><strong>[Apr 2025]</strong> <span>DenoiseNAS is accepted by [Expert Systems with Applications].</span></li>
          <li><strong>[Apr 2025]</strong> <span>Two papers are accepted by [CVPR 2025 Workshop].</span></li>
          <li><strong>[Feb 2025]</strong> <span>Two papers GETA and AFL are accepted by [CVPR 2025].</span></li>
        </ul>
      </section>

      <section id="publications">
        <h2>Publication / Preprint (selected)</h2>
        
        <div className="publication">
          <div className="pub-image">
            <img src="/wina_thumbnail.png" alt="Paper thumbnail" />
          </div>
          <div className="pub-content">
            <p className="pub-authors">
              Sihan Chen, Dan Zhao, Jongwoo Ko, Colby Banbury, Huiping Zhuang, Luming Liang, <strong>Tianyi Chen</strong>
            </p>
            <p className="pub-title">
              <a href="https://openreview.net/pdf?id=l7Vb3yxmuz">WINA: Weight Informed Neuron Activation for Accelerating Large Language Model Inference</a>
            </p>
            <p className="pub-venue">ICLR 2026</p>
            <p className="pub-links">
              <a href="https://openreview.net/pdf?id=l7Vb3yxmuz">Paper</a> | <a href="https://github.com/microsoft/wina">Code</a> | <a href="https://www.youtube.com/watch?v=8lg_kIzkYt8">Media</a>
            </p>
          </div>
        </div>

        <div className="publication">
          <div className="pub-image">
            <img src="/cua_skill_thumbnail.png" alt="Paper thumbnail" />
          </div>
          <div className="pub-content">
            <p className="pub-authors">
              <strong>Tianyi Chen</strong>, Yinheng Li, Michael Solodko, Sen Wang, Nan Jiang, Tingyuan Cui, Junheng Hao, Jongwoo Ko, Sara Abdali, Suzhen Zheng, Leon Xu, Hao Fan, Pashmina Cameron, Justin Wagle, Kazuhito Koishida
            </p>
            <p className="pub-title">
              <a href="https://microsoft.github.io/cua_skill/">CUA-Skill: Develop Skills for Computer Using Agent</a>
            </p>
            <p className="pub-venue">Preprint</p>
            <p className="pub-links">
              <a href="https://microsoft.github.io/cua_skill/">Paper</a> | <a href="https://github.com/microsoft/cua_skill">Code</a>
            </p>
          </div>
        </div>

        <div className="publication">
          <div className="pub-image">
            <img src="/stableqat_thumbnail.png" alt="Paper thumbnail" />
          </div>
          <div className="pub-content">
            <p className="pub-authors">
              <strong>Tianyi Chen</strong>, Sihan Chen, Xiaoyi Qu, Dan Zhao, Ruomei Yan, Jongwoo Ko, Luming Liang, Pashmina Cameron
            </p>
            <p className="pub-title">
              <a href="https://arxiv.org/pdf/2601.19320">StableQAT: Stable Quantization-Aware Training at Ultra-Low Bitwidths</a>
            </p>
            <p className="pub-venue">Preprint</p>
            <p className="pub-links">
              <a href="https://arxiv.org/pdf/2601.19320">Paper</a> | <a href="https://github.com/microsoft/StableQAT">Code</a>
            </p>
          </div>
        </div>

        <div className="publication">
          <div className="pub-image">
            <img src="/oto_v1_thumbnail.png" alt="Paper thumbnail" />
          </div>
          <div className="pub-content">
            <p className="pub-authors">
              <strong>Tianyi Chen</strong>, Bo Ji, Tianyu Ding, Biyi Fang, Guanyi Wang, Zhihui Zhu, Luming Liang, Yixin Shi, Sheng Yi, Xiao Tu
            </p>
            <p className="pub-title">
              <a href="https://proceedings.neurips.cc/paper/2021/file/a376033f78e144f494bfc743c0be3330-Paper.pdf">Only train once: A one-shot neural network training and pruning framework</a>
            </p>
            <p className="pub-venue">NeurIPS 2021</p>
            <p className="pub-links">
              <a href="https://proceedings.neurips.cc/paper/2021/file/a376033f78e144f494bfc743c0be3330-Paper.pdf">Paper</a> | <a href="https://github.com/tianyic/only_train_once_personal_footprint">Code</a> | <a href="https://zhuanlan.zhihu.com/p/400278421">Media</a>
            </p>
          </div>
        </div>

        <div className="publication">
          <div className="pub-image">
            <img src="/oto_v2_thumbnail.png" alt="Paper thumbnail" />
          </div>
          <div className="pub-content">
            <p className="pub-authors">
              <strong>Tianyi Chen</strong>, Luming Liang, Tianyu Ding, Zhihui Zhu, Ilya Zharkov
            </p>
            <p className="pub-title">
              <a href="https://openreview.net/pdf?id=7ynoX1ojPMt">OTOv2: Automatic, Generic, User-Friendly</a>
            </p>
            <p className="pub-venue">ICLR 2023</p>
            <p className="pub-links">
              <a href="https://openreview.net/pdf?id=7ynoX1ojPMt">Paper</a> | <a href="https://github.com/tianyic/only_train_once_personal_footprint">Code</a> | <a href="https://x.com/_akhaliq/status/1635467141628456960">Media</a>
            </p>
          </div>
        </div>

        <div className="publication">
          <div className="pub-image">
            <img src="/distillm_v1_thumbnail.png" alt="Paper thumbnail" />
          </div>
          <div className="pub-content">
            <p className="pub-authors">
              Jongwoo Ko, Sungnyun Kim, <strong>Tianyi Chen</strong>, Se-Young Yun
            </p>
            <p className="pub-title">
              <a href='https://arxiv.org/pdf/2402.03898'>DistiLLM: Towards streamlined distillation for large language models</a>
            </p>
            <p className="pub-venue">ICML 2024</p>
            <p className="pub-links">
              <a href="https://arxiv.org/pdf/2402.03898">Paper</a> | <a href="https://github.com/jongwooko/distillm">Code</a> | <a href="https://x.com/arankomatsuzaki/status/1755059693687275584">Media</a>
            </p>
          </div>
        </div>

        <div className="publication">
          <div className="pub-image">
            <img src="/distillm_v2_thumbnail.png" alt="Paper thumbnail" />
          </div>
          <div className="pub-content">
            <p className="pub-authors">
              Jongwoo Ko, <strong>Tianyi Chen</strong>, Sungnyun Kim, Tianyu Ding, Luming Liang, Ilya Zharkov, Se-Young Yun
            </p>
            <p className="pub-title">
              <a href="https://openreview.net/pdf?id=rc65N9xIrY">DistiLLM-2: A Contrastive Approach Boosts the Distillation of LLMs</a>
            </p>
            <p className="pub-venue">ICML 2025 Oral (Top 1\%)</p>
            <p className="pub-links">
              <a href="https://openreview.net/pdf?id=rc65N9xIrY">Paper</a> | <a href="https://github.com/jongwooko/distillm-2">Code</a>
            </p>
          </div>
        </div>

        <div className="publication">
          <div className="pub-image">
            <img src="/geta.png" alt="Paper thumbnail" />
          </div>
          <div className="pub-content">
            <p className="pub-authors">
              Xiaoyi Qu, David Aponte, Colby Banbury, Daniel P Robinson, Tianyu Ding, Kazuhito Koishida, Ilya Zharkov, <strong>Tianyi Chen</strong>
            </p>
            <p className="pub-title">
              <a href='https://openaccess.thecvf.com/content/CVPR2025/papers/Qu_Automatic_Joint_Structured_Pruning_and_Quantization_for_Efficient_Neural_Network_CVPR_2025_paper.pdf'>Automatic Joint Structured Pruning and Quantization for Efficient Neural Network Training and Compression</a>
            </p>
            <p className="pub-venue">CVPR 2025</p>
            <p className="pub-links">
              <a href="https://openaccess.thecvf.com/content/CVPR2025/papers/Qu_Automatic_Joint_Structured_Pruning_and_Quantization_for_Efficient_Neural_Network_CVPR_2025_paper.pdf">Paper</a> | <a href="https://github.com/microsoft/GETA">Code</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
