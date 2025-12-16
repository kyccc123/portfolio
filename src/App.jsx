import React, { useState, useEffect } from 'react';
import { ArrowRight, X, ChevronRight, Mail, Instagram, Phone } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 프로젝트 데이터
  const projects = [
    {
      id: '01',
      category: 'BRANDING & STRATEGY',
      title: '철학관 주점 리브랜딩',
      subtitle: '학과 폐과 위기 극복을 위한 유쾌한 브랜딩 전략',
      period: '2022.09 - 2022.10',
      role: 'Project Manager, Branding',
      contribution: '100%',
      overview: '학과 폐과 위기라는 무거운 상황을 "철학관(점집)"이라는 중의적 키워드와 유머로 승화시킨 브랜딩 프로젝트입니다. "철학과 정상영업합니다"라는 슬로건을 통해 대중의 인식을 긍정적으로 전환하고 성공적인 축제 운영을 이끌어냈습니다.',
      details: [
        { label: 'Problem', text: '학과의 존폐 위기로 인한 침체된 분위기와 대중의 부정적/무관심한 인식.' },
        { label: 'Solution', text: '기존의 진지한 대응 대신 해학(Humor)을 선택. 점집 컨셉의 포스터와 메뉴 구성으로 호기심 자극.' },
        { label: 'Result', text: 'SNS 및 커뮤니티 바이럴 성공, 역대 최고 수익 달성 및 학과 이미지 개선.' }
      ],
      keywords: ['Crisis Management', 'Re-branding', 'Creative Strategy'],
      color: 'bg-orange-100'
    },
    {
      id: '02',
      category: 'MANAGEMENT & EVENT',
      title: '제1회 철학과 연합 학술대회',
      subtitle: '12개 대학 연합 네트워크 구축 및 대규모 행사 기획',
      period: '2023.03 - 2023.10',
      role: 'General Director',
      contribution: 'General Director',
      overview: '기존에 없던 12개 대학 철학과 연합 네트워크를 0부터 구축하여 성공적으로 런칭한 대규모 프로젝트입니다. 체계적인 심사 시스템과 후원 전략을 수립하여 학생 자치 행사의 새로운 모델을 제시했습니다.',
      details: [
        { label: 'Goal', text: '파편화된 철학 전공생들을 연결하는 지속 가능한 학술 교류 플랫폼 구축.' },
        { label: 'Action', text: '운영위원회 조직, 예산 확보를 위한 스폰서십 제안, 공정한 심사 프로세스 설계.' },
        { label: 'Result', text: '12개 대학 참여, 성공적인 행사 개최, 차기 연합회로 이어지는 기반 마련.' }
      ],
      keywords: ['Project Management', 'Network Building', 'Event Planning'],
      color: 'bg-blue-100'
    },
    {
      id: '03',
      category: 'SERVICE PLANNING',
      title: '디오니소스제 데이터 기획',
      subtitle: '데이터 기반 페르소나 분석 및 프로세스 설계',
      period: '2025.03 - Present',
      role: 'Planning Lead',
      contribution: 'Team Lead',
      overview: '전통적인 학술제를 데이터 기반으로 혁신하는 프로젝트입니다. 신입생들의 니즈를 설문과 인터뷰로 수집/분석하여 "참여하고 싶은" 콘텐츠를 기획하고, 지속 가능한 운영 프로세스를 문서는 작업(Systemization)을 진행 중입니다.',
      details: [
        { label: 'Approach', text: '직관에 의존하던 기획에서 벗어나 데이터 기반의 의사결정(Data-Driven) 도입.' },
        { label: 'Process', text: '핵심 페르소나 설정, 니즈 조사, 맞춤형 콘텐츠(네트워킹, 멘토링) 매칭.' },
        { label: 'Value', text: '일회성 행사가 아닌 지속 가능한 운영 시스템 및 메뉴얼 구축.' }
      ],
      keywords: ['Data Analysis', 'UX Research', 'System Design'],
      color: 'bg-green-100'
    },
    {
      id: '04',
      category: 'UX/UI & DEV',
      title: 'Embark 플랫폼',
      subtitle: '외국인 유학생 정보 격차 해소를 위한 AI 플랫폼',
      period: '2025.01 - 2025.06',
      role: 'PM, UX Planner',
      contribution: 'Team Project',
      overview: '외국인 유학생들이 겪는 정보 비대칭(부동산, 의료 등) 문제를 해결하기 위한 AI 기반 정보 플랫폼입니다. 사용자 관점의 UX 설계와 React 기반 프로토타입 구현을 통해 실질적인 솔루션을 제시했습니다.',
      details: [
        { label: 'Pain Point', text: '언어 장벽과 정보 분산으로 인한 생활 속 필수 정보(병원, 집 구하기) 획득의 어려움.' },
        { label: 'Feature', text: 'AI 챗봇 상담, 다국어 의료 맵, 맞춤형 생활 가이드 제공.' },
        { label: 'Tech', text: 'React, AI API Integration, UX/UI Design.' }
      ],
      keywords: ['Product Management', 'AI Solution', 'Social Impact'],
      color: 'bg-indigo-100'
    },
    {
      id: '05',
      category: 'DATA ANALYTICS',
      title: 'MICE 산업 데이터 분석',
      subtitle: '국내 MICE 산업의 수도권 편중화 현상 분석 및 기사화',
      period: '2025',
      role: 'Data Analyst',
      contribution: '100%',
      overview: '국내 5대 컨벤션 센터(KINTEX, COEX 등)의 연간 행사 데이터 2,450건을 Python으로 크롤링 및 전수 분석했습니다. "산업은 서울로, 소비는 지방으로" 쏠리는 구조적 불균형을 통계적으로 규명하고, KIMES 등의 사례 연구를 통해 데이터 기반 저널리즘을 실현했습니다.',
      details: [
        { label: 'Method', text: 'Python 크롤링, 키워드 기반 분류(산업/소비재/문화), Matplotlib 시각화.' },
        { label: 'Insight', text: '수도권은 산업/기술 전시 비중(37.9%)이 높고, 지방은 소비재 전시(45.7%)가 압도적임을 증명.' },
        { label: 'Value', text: '막연한 가설을 정량적 데이터로 검증하여 산업 구조의 불균형을 시각적으로 입증.' }
      ],
      keywords: ['Python', 'Data Mining', 'Data Journalism'],
      color: 'bg-purple-100'
    },
    {
      id: '06',
      category: 'GAME ANALYSIS',
      title: '메이플 키우기 역기획',
      subtitle: '데이터 기반 게임 분석 및 비평 아티클',
      period: 'Personal Project',
      role: 'Game Analyst',
      contribution: '100%',
      overview: '방치형 RPG "메이플 키우기"의 출시 전후 반응과 인게임 데이터를 3단계(Pre/In/Post)로 분석했습니다. 스토어 리뷰 크롤링을 통해 유저 이탈 요인과 BM 구조의 상관관계를 도출하고, 이를 바탕으로 논리적인 개선안이 담긴 게임 비평 아티클을 작성했습니다.',
      details: [
        { label: 'Process', text: '시장 기대감 분석 → UX 및 코어 루프 분석 → 리뷰 데이터 크롤링을 통한 이탈 분석.' },
        { label: 'Logic', text: '플레이 데이터와 유저 리뷰를 교차 검증하여 재미/페인 포인트와 BM 구조의 연관성 도출.' },
        { label: 'Output', text: '데이터 기반의 문제 정의 및 개선 제안이 담긴 역기획 포트폴리오.' }
      ],
      keywords: ['Game Design', 'Reverse Engineering', 'User Feedback'],
      color: 'bg-red-100'
    },
    {
      id: '07',
      category: 'UX RESEARCH',
      title: '게이머 정서 연구',
      subtitle: '"게임의 역설" 현상 규명 및 솔루션 제안',
      period: '2025 Fall',
      role: 'UX Researcher',
      contribution: 'Team Project',
      overview: '"휴식을 위해 시작한 게임이 왜 피로와 스트레스로 귀결되는가?"라는 문제의식에서 출발한 질적 연구 프로젝트입니다. 참여관찰과 심층 인터뷰를 통해 게이머의 심리적 순환 메커니즘을 모델링하고, 생체 신호 연동형 플레이 리듬 최적화 솔루션을 제안했습니다.',
      details: [
        { label: 'Problem', text: '게임 이용 중 동기가 변질되어 부정적 정서로 전환되는 "게임의 역설" 현상.' },
        { label: 'Method', text: '참여관찰, 심층 인터뷰, 원인연쇄분석을 통한 정서 변화 메커니즘 규명.' },
        { label: 'Solution', text: '심박수 기반으로 경쟁(Rank)과 이완(Casual) 모드를 자동 추천하는 웨어러블 서비스.' }
      ],
      keywords: ['Qualitative Research', 'HCI', 'Service Design'],
      color: 'bg-teal-100'
    }
  ];

  // 상세 페이지 닫기
  const closeDetail = () => setSelectedProject(null);

  // --- 컴포넌트 ---

  const Navigation = () => (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div 
        className="text-xl font-serif font-bold tracking-tighter cursor-pointer z-50 mix-blend-difference text-black"
        onClick={() => {setActiveSection('home'); closeDetail();}}
      >
        KANG. YU CHAN
      </div>
       
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-600">
          {['About', 'Projects', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => {
                setActiveSection(item.toLowerCase());
                closeDetail();
                const el = document.getElementById(item.toLowerCase());
                if(el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-black transition-colors uppercase"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const Hero = () => (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 bg-[#F9F9F9]">
      <div className="max-w-6xl w-full mx-auto">
        <p className="text-sm md:text-base text-gray-500 mb-4 tracking-widest uppercase animate-fade-in-up">
          KANG YU CHAN PORTFOLIO
        </p>
        <h1 className="text-5xl md:text-8xl font-serif font-light leading-[1.1] text-[#1a1a1a] mb-12">
          <span className="block animate-slide-in-left" style={{animationDelay: '0.1s'}}>LOGICAL</span>
          <span className="block italic font-normal ml-8 md:ml-20 animate-slide-in-left" style={{animationDelay: '0.2s'}}>STRATEGY</span>
          <span className="block text-right mr-4 md:mr-20 animate-slide-in-left" style={{animationDelay: '0.3s'}}>& TECH FUSION</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-24 border-t border-gray-300 pt-8">
          <div>
            <span className="text-xs font-bold text-gray-400 block mb-2">Logic (Philosophy)</span>
            <p className="text-sm text-gray-600 leading-relaxed">
              현상의 이면을 꿰뚫어<br/>진짜 문제를 정의하는 힘
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 block mb-2">Strategy (Business)</span>
            <p className="text-sm text-gray-600 leading-relaxed">
              시장과 고객을 분석하여<br/>실현 가능한 전략을 수립하는 힘
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 block mb-2">Tech (Data & Tech)</span>
            <p className="text-sm text-gray-600 leading-relaxed">
              Python과 AI 등 최신 기술을 도구로<br/>활용해 솔루션을 구체화하는 힘
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const Attitude = () => (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <h2 className="text-3xl font-serif italic mb-6">Attitude</h2>
          <div className="w-12 h-0.5 bg-black mb-6"></div>
        </div>
        <div className="col-span-12 md:col-span-8 space-y-8">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
            "융합적 사고는 서로 다른 영역의<br/>
            <span className="font-serif italic font-normal">경계(Edge)</span>에서 시작됩니다."
          </p>
          <div className="text-sm md:text-base text-gray-500 leading-loose space-y-4">
            <p>
              철학을 통해 '왜'라는 본질을 묻고, 경영학을 통해 '어떻게'라는 방법을 찾으며, 
              기술을 통해 '무엇'을 만들지 고민합니다. 
            </p>
            <p>
              단순한 문제 해결을 넘어, 시스템과 미래를 고민하는 전략적 사고로 
              비즈니스의 가치를 창출하는 기획자가 되고자 합니다. 
              데이터와 인문학적 통찰, 그리고 기술적 이해를 바탕으로 
              최적의 솔루션을 제안합니다.
            </p>
          </div>
           
          <div className="grid grid-cols-2 gap-4 mt-8">
             <div className="border border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                <h3 className="text-xs font-bold uppercase tracking-wider mb-2">Education</h3>
                <p className="text-sm">철학 & 경영학 복수전공</p>
                <p className="text-xs text-gray-400 mt-1">GPA 4.0 / 4.5</p>
             </div>
             <div className="border border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                <h3 className="text-xs font-bold uppercase tracking-wider mb-2">Certificate</h3>
                <p className="text-sm">ADsP (데이터분석 준전문가)</p>
                <p className="text-xs text-gray-400 mt-1">한국사능력검정 1급</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ProjectList = () => (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-serif">Selected Works</h2>
          <span className="text-sm text-gray-500 hidden md:block">Based on Logic, Strategy, and Data</span>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white p-0 md:p-8 hover:shadow-xl transition-all duration-500 ease-out border border-transparent hover:border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Visual Area */}
                <div className={`col-span-12 md:col-span-5 h-64 md:h-80 ${project.color} flex items-center justify-center relative overflow-hidden`}>
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                   <span className="text-9xl font-serif text-black/5 absolute -bottom-10 -right-10 select-none transition-transform duration-700 group-hover:scale-110">
                     {project.id}
                   </span>
                   <div className="text-gray-800 opacity-80 z-10 text-center px-4">
                      <p className="font-serif italic text-xl mb-2">{project.keywords[0]}</p>
                      <div className="w-8 h-0.5 bg-black mx-auto"></div>
                   </div>
                </div>

                {/* Text Area */}
                <div className="col-span-12 md:col-span-7 p-6 md:p-0 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-bold tracking-widest uppercase text-gray-400 border border-gray-200 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-400">{project.period}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-lg font-light mb-6">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed mb-6">
                      {project.overview}
                    </p>
                  </div>
                   
                  <div className="flex items-center text-sm font-medium uppercase tracking-wider group-hover:underline underline-offset-4">
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ProjectModal = () => {
    if (!selectedProject) return null;
    const p = selectedProject;

    return (
      <div className="fixed inset-0 z-[60] bg-white overflow-y-auto animate-fade-in">
        <div className="relative max-w-7xl mx-auto bg-white min-h-screen pb-20">
           
          {/* Close Button */}
          <button 
            onClick={closeDetail}
            className="fixed top-8 right-8 z-50 p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            <X size={24} />
          </button>

          {/* Header Image Area */}
          <div className={`w-full h-[40vh] md:h-[50vh] ${p.color} flex items-center justify-center flex-col`}>
             <h1 className="text-4xl md:text-6xl font-serif text-center px-4 mb-4 opacity-0 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
               {p.title}
             </h1>
             <p className="text-lg md:text-xl font-light text-center opacity-0 animate-slide-up" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
               {p.subtitle}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-6 md:px-12 py-16 md:py-24">
             
            {/* Left Column: Project Info */}
            <div className="col-span-12 md:col-span-4 space-y-12">
               <div>
                 <h3 className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-6">Project Info</h3>
                 <div className="space-y-4 text-sm border-l-2 border-gray-100 pl-4">
                   <div>
                     <span className="block text-gray-400 text-xs uppercase mb-1">Period</span>
                     <span className="font-medium">{p.period}</span>
                   </div>
                   <div>
                     <span className="block text-gray-400 text-xs uppercase mb-1">Role</span>
                     <span className="font-medium">{p.role}</span>
                   </div>
                   <div>
                     <span className="block text-gray-400 text-xs uppercase mb-1">Contribution</span>
                     <span className="font-medium">{p.contribution}</span>
                   </div>
                   <div>
                     <span className="block text-gray-400 text-xs uppercase mb-1">Keywords</span>
                     <div className="flex flex-wrap gap-2 mt-1">
                       {p.keywords.map(k => (
                         <span key={k} className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded border border-gray-200">{k}</span>
                       ))}
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Right Column: Content */}
            <div className="col-span-12 md:col-span-8">
              <div className="mb-16">
                 <h3 className="text-2xl font-serif italic mb-6">Overview</h3>
                 <p className="text-gray-600 leading-loose text-lg font-light">
                   {p.overview}
                 </p>
              </div>

              <div className="space-y-12">
                 {p.details.map((detail, idx) => (
                   <div key={idx} className="group">
                     <h4 className="text-xl font-bold mb-3 flex items-center">
                       <span className="w-2 h-2 bg-black rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                       {detail.label}
                     </h4>
                     <p className="text-gray-600 leading-relaxed pl-5 border-l border-gray-200">
                       {detail.text}
                     </p>
                   </div>
                 ))}
              </div>

              {/* Visual Mockups Placeholder */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center text-gray-400 text-sm uppercase tracking-widest">
                  Process Image 01
                </div>
                <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center text-gray-400 text-sm uppercase tracking-widest">
                  Result Image 02
                </div>
                <div className="bg-gray-100 aspect-video col-span-1 md:col-span-2 flex items-center justify-center text-gray-400 text-sm uppercase tracking-widest">
                  Final Showcase
                </div>
              </div>
            </div>

          </div>

          <div className="px-6 md:px-12 pb-12 flex justify-between items-center border-t border-gray-100 pt-8">
             <button onClick={closeDetail} className="text-sm font-bold uppercase hover:underline">
               ← Back to List
             </button>
             <span className="font-serif italic text-2xl text-gray-200">{p.id}</span>
          </div>

        </div>
      </div>
    );
  };

  const Contact = () => (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif italic mb-8">Ready to Connect</h2>
        <p className="text-gray-400 mb-12 font-light">
          논리적 사고, 경영학적 분석, 기술에 대한 이해를 바탕으로<br className="hidden md:block"/>
          최적의 해결책을 함께 찾아가겠습니다.
        </p>
         
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <a href="mailto:machitreechan01@naver.com" className="flex items-center gap-3 text-lg hover:text-gray-300 transition-colors">
            <Mail size={20} /> machitreechan01@naver.com
          </a>
          <a href="#" className="flex items-center gap-3 text-lg hover:text-gray-300 transition-colors">
            <Instagram size={20} /> @kang.yoochan
          </a>
        </div>

        <div className="text-xs text-gray-600 uppercase tracking-widest">
          © 2025 KANG YU CHAN. All Rights Reserved.
        </div>
      </div>
    </section>
  );

  return (
    <div className="font-sans text-[#1a1a1a] selection:bg-black selection:text-white">
      <Navigation />
      
      <main>
        {activeSection === 'home' && (
          <>
            <Hero />
            <Attitude />
            <ProjectList />
            <Contact />
          </>
        )}
      </main>

      {/* Detail Modal */}
      {selectedProject && <ProjectModal />}
      
      {/* Global Styles for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards opacity-0; }
        .animate-slide-up { animation: slideUp 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;
