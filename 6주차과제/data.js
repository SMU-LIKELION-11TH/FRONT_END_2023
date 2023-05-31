const q = {
  1: {
    title:
      "멋쟁이 사자처럼 처음 오리엔테이션 날!! 내 옆자리에 앉은 아기사자에게 당신이 할 행동은?",
    type: "EI", //key
    A: "내가 방학 때 뭐했냐면..",
    B: "(끄덕끄덕 이야기 듣는 중)",
  },
  2: {
    title: "꿀같은 공강에 당신은?",
    type: "EI",
    A: "시간이 생겼으니 사람을 만나야지! 친구를 불러서 논다.",
    B: "공강인데 밖에 왜 나가? 집콕하면서 혼자만의 시간을 가진다.",
  },
  3: {
    title:
      "오랜만에 약속이 생겼는데 당일에 갑자기 아파서 못 나갈 것 같다고 연락온 친구.. 당신의 반응은!?",
    type: "EI",
    A: "절망과 슬픔.. 허망함을 느끼며 카톡창 친구들에게 지금 뭐하냐고 물어본다.",
    B: "아픈데 뭐 어쩔수없지ㅠㅠ 집에서 과제나 해야겠다~! 근데 왜 기쁘지?",
  },
  4: {
    title: "지금은 점심시간, 같은 메뉴를 파는 두 식당 중 어디에 들어갈까?",
    type: "SN",
    A: "냄새와 색감을 봤을 때 이 식당이 맛있을거야!! 손님도 더 많은 것 보니 맛집인게 확실해!",
    B: "오늘 feel로는 이 식당인걸~",
  },
  5: {
    title: "열띤 프로젝트 중 조별과제 빌런과 만나버렸다.. 더는 못 참아😡",
    type: "SN",
    A: "빠른 손절, 당신은 저희 팀에 필요 없습니다.",
    B: "내가 참아야지, 이번이 마지막 기회다. 다음부턴 가만 안 둡니다. (500번째 다짐)",
  },
  6: {
    title: "선배가 커피를 사준다는데?",
    type: "SN",
    A: "공짜 커피 개이득! 맛있겠당",
    B: "‘나한테 왜 사주는거지? 원하시는 게 있나?’ 내적 생각 대폭발",
  },
  7: {
    title:
      "삼일 밤낮 열심히 해커톤을 준비했지만 결국 배포에 실패하고 미완성으로 끝나버렸다..",
    type: "TF",
    A: "마무리를 못했다는 사실에 너무 슬프고 화난다.",
    B: "괜찮아. 그래도 얻은것도 많고 열심히 했잖아!",
  },
  8: {
    title:
      "교양 강의를 듣는데 옆자리에 마음에 드는 이상형이 있다. 어쩌다 대화를 시작한 당신은?",
    type: "TF",
    A: "이것저것 궁금한 것을 질문한다.",
    B: "풍부한 공감과 리액션을 해준다.",
  },
  9: {
    title:
      "동기에게 갑자기 온 카톡! “나 우울해서 기분전환 겸 염색했어”, 당신의 답장은?",
    type: "TF",
    A: "오 사진 ㄱㄱ",
    B: "헉 왜 우울해? 무슨일 있었어? 지금은 괜찮아?",
  },
  10: {
    title: "새로운 프로젝트에 참여하게 된 당신! 일단 뭐부터 하지?",
    type: "JP",
    A: '"오늘은 이 기능을 끝내고 내일은.." 차근차근 개발할 계획을 세운다.',
    B: "일단 노트북부터 피고 손잡히는 대로 이것저것 시작한다.",
  },
  11: {
    title: "오늘은 과제 마감 날, 당신의 행동은?",
    type: "JP",
    A: "응? 나 그거 2주전에 다 했어.",
    B: "아직 5시간이나 남았는데? 유튜브 마저보고 하려고~",
  },
  12: {
    title: "드디어 기다리던 종강! 동기들과 제주도로 여행을 가고싶은데..",
    type: "JP",
    A: "자 내일 계획 불러줄게~ 6시 기상, 7시 출발, 공항 도착하면 11시에 수제버거 먹으러 갈거야. 1시까지 다먹고 카페가서 사진찍고..",
    B: "바다보고.. 귤먹고.. 베이글? 베이글 가게 생겼대 !! (해맑)",
  },
};

const result = {
  ISTP: {
    subtitle: "논리적이고 실용주의적인 아가사자(ISTP)",
    explain:
      "타인을 잘 도우며 그들의 경험을 다른 이들과 공유하는 것을 좋아하기도 하는 ISTP는 특히나 그들이 아끼는 사람일수록 더욱 그러합니다. 이들이 인구의 고작 5%만이 차지합니다. 냉철한 이성주의적 성향과 왕성한 호기심을 가진 만능재주꾼형 사람은 직접 손으로 만지고 눈으로 보면서 주변 세상을 탐색하는 것을 좋아합니다. 무엇을 만드는 데 타고난 재능을 가진 이들은 하나가 완성되면 또 다른 과제로 옮겨 다니는 등 실생활에 유용하면서도 자질구레한 것들을 취미 삼아 만드는 것을 좋아하는데, 그러면서 새로운 기술을 하나하나 터득해 나갑니다. 종종 기술자나 엔지니어이기도 한 이들에게 있어 소매를 걷어붙이고 작업에 뛰어들어 직접 분해하고 조립할 때보다 세상에 즐거운 일이 또 없을 것입니다.",
    img: "image/ISTP.png",
  },
  ISTJ: {
    subtitle: "청렴결백한 논리적인 아가사자(ISTJ)",
    explain:
      "논리주의자형은 가장 다수의 사람이 속하는 성격 유형으로 인구의 대략 13%를 차지합니다. 청렴결백하면서도 실용적인 논리력과 헌신적으로 임무를 수행하는 성격으로 묘사되기도 하는 이들은, 가정 내에서뿐 아니라 법률 회사나 법 규제 기관 혹은 군대와 같이 전통이나 질서를 중시하는 조직에서 핵심 구성원 역할을 합니다. 이 유형의 사람은 자신이 맡은 바 책임을 다하며 그들이 하는 일에 큰 자부심을 가지고 있습니다. 또한, 목표를 달성하기 위해 시간과 에너지를 허투루 쓰지 않으며, 이에 필요한 업무를 정확하고 신중하게 처리합니다.",
    img: "image/ISTJ.png",
  },
  ISFP: {
    subtitle: "호기심 많은 다정한 아가사자(ISFP)",
    explain:
      "말없이 다정하고 온화하며 사람들에게 친절하고 상대방을 잘 알게 될 때까지 내면의 모습이 잘 보이지 않습니다. 의견 충돌을 피하고, 인화를 중시합니다. 인간과 관계되는 일을 할 때 자신의 감정과 타인의 감정에 지나치게 민감한 경향이 있습니다. 이들은 결정력과 추진력을 기를 필요가 있습니다. 3차 기능인 Ni(내향 직관)으로 눈치가 빠르며, 조용히 자기 일만 하고 있는 것처럼 보이지만 사실 주변 상황파악도 다 하고 있습니다. 경험을 통해서 부기능 Se(외향 감각)과 함께 주기능 Fi(내향 감정)인 자신의 내면을 보호하는데에 잘 사용할 수 있습니다.",
    img: "image/ISFP.png",
  },
  ISFJ: {
    subtitle: "실용적인 조력가 아기사자(ISFJ)",
    explain:
      "ISFJ 특징 유형 성격의 소유자는 조용하고 차분하며 따뜻하고 친근합니다. 책임감과 인내력 또한 매우 강하며, 본인의 친한 친구나 가족에게 애정이 가득합니다. 이들은 언제나 진솔하려 노력하고 가볍지 않기 때문에 관계를 맺기에 가장 믿음직스러운 유형입니다. 수호자형 사람은 무엇을 받으면 몇 배로 베푸는 진정한 이타주의자로 열정과 자애로움으로 일단 믿는 이들이라면 타인과도 잘 어울려 일에 정진합니다. ",
    img: "image/ISFJ.png",
  },
  INTP: {
    subtitle: "논리적이고 아이디어가 넘치는 아기사자(INTP)",
    explain:
      "INTP 특징은 조용하고 과묵하며 논리와 분석으로 문제를 해결하기를 좋아합니다. 먼저 대화를 시작하지 않는 편이나 관심이 있는 분야에 대해서는 말을 많이 하는 편입니다. 이해가 빠르고 직관력으로 통찰하는 능력이 있으며 지적 호기심이 많아, 분석적이고 논리적입니다. MBTI 16가지 성격 유형 중 창의적 지능과 논리면에서 가장 뛰어나, 비과학적이거나 논리적이지 못한 일들에 대단히 거부반응을 보일 경향이 높습니다. 아이디어와 원리, 인과관계에 관심이 많으며 실체보다는 실체가 안고 있는 가능성에 관심이 많습니다.",
    img: "image/INTP.png",
  },
  INTJ: {
    subtitle: "용의주도한 전략가 아기사자(INTJ)",
    explain:
      "INTJ의 지식을 향한 갈증은 어릴 적부터 두드러지게 나타나는데, 때문에 건축가형 사람은 어릴 때 ‘책벌레’라는 소리를 자주 듣습니다. 대개 친구들 사이에서는 놀림의 표현임에도 불구하고 전혀 개의치 않아 하며, 오히려 깊고 넓은 지식을 가지고 있는 그들 자신에게 남다른 자부심을 느낍니다. 이들은 또한 관심 있는 특정 분야에 대한 그들의 방대한 지식을 다른 이들과 공유하고 싶어 하기도 합니다. 반면, 일명 가십거리와 같이 별 볼 일 없는 주제에 대한 잡담거리보다는 그들 나름의 분야에서 용의주도하게 전략을 세우거나 이를 실행해 옮기는 일을 선호합니다.",
    img: "image/INTJ.png",
  },
  INFP: {
    subtitle: "열정적인 중재자 아기사자(INFP)",
    explain:
      "중재자형 사람은 최악의 상황이나 악한 사람에게서도 좋은 면만을 바라보며 긍정적이고 더 나은 상황을 만들고자 노력하는 진정한 이상주의자입니다. 간혹 침착하고 내성적이며 심지어는 수줍음이 많은 사람처럼 비추어지기도 하지만, 이들 안에는 불만 지피면 활활 타오를 수 있는 열정의 불꽃이 숨어있습니다. 인구의 대략 4%를 차지하는 이들은 간혹 사람들의 오해를 사기도 하지만, 일단 마음이 맞는 사람을 만나면 이들 안에 내재한 충만한 즐거움과 넘치는 영감을 경험할 수 있을 것입니다.",
    img: "image/INFP.png",
  },
  INFJ: {
    subtitle: "통찰력 있는 예언가 아기사자(INFJ)",
    explain:
      "INFJ 특징은 인내심이 많고 통찰력과 직관력이 뛰어나며 화합을 추구합니다. 창의력이 좋으며, 성숙한 경우엔 강한 직관력으로 타인에게 말없이 영향력을 끼칩니다. 독창성과 내적 독립심이 강하며, 확고한 신념과 열정으로 자신의 영감을 구현시켜 나가는 정신적 지도자들이 많습니다. 나무보다 숲을 보는 편입니다. 한곳에 몰두하는 경향으로 목적 달성에 필요한 주변적인 조건들을 경시하기 쉽고, 자기 내부의 갈등이 많고 복잡합니다. 이들은 풍부하고 감성적인 내적인 성격을 갖고 있습니다.",
    img: "image/INFJ.png",
  },
  ESTP: {
    subtitle: "모험을 즐기는 활동가형 아기사자(ESTP)",
    explain:
      "ESTP 특징은 주변에 지대한 영향을 주는 사업가형 사람은 여러 사람이 모인 행사에서 이 자리 저 자리 휙휙 옮겨 다니는 무리 중에서 어렵지 않게 찾아볼 수 있습니다.  직설적이면서도 친근한 농담으로 주변 사람을 웃게 만드는 이들은 주변의 이목을 끄는 것을 좋아합니다. 만일 관객 중 무대에 올라올 사람을 호명하는 경우, 이들은 제일 먼저 자발적으로 손을 들거나 아니면 쑥스러워하는 친구를 대신하여 망설임 없이 무대에 올라서기도 합니다.",
    img: "image/ESTP.png",
  },
  ESTJ: {
    subtitle: "엄격한 관리자 아기사자(ESTJ)",
    explain:
      "관리자형 유형은 그들 생각에 반추하여 무엇이 옳고 그른지를 따져 사회나 가족을 하나로 단결시키기 위해 사회적으로 받아들여지는 통념이나 전통 등 필요한 질서를 정립하는 데 이바지하는 대표적인 유형입니다. 정직하고 헌신적이며 위풍당당한 이들은 비록 험난한 가시밭길이라도 조언을 통하여 그들이 옳다고 생각하는 길로 사람들을 인도합니다. 군중을 단결시키는 데에 일가견이 있기도 한 이들은 종종 사회에서 지역사회조직가와 같은 임무를 수행하며, 지역 사회 발전을 위한 축제나 행사에서부터 가족이나 사회를 하나로 결집하기 위한 사회 운동을 펼치는 데 사람들을 모으는 역할을 하기도 합니다.",
    img: "image/ESTJ.png",
  },
  ESFP: {
    subtitle: "자유로운 영혼의 연예인 아기사자(ESFP)",
    explain:
      "ESFP 유형으로 갑자기 흥얼거리며 즉흥적으로 춤을 추기 시작하는 누군가가 있다면 이는 연예인형의 사람일 가능성이 큽니다. 이들은 순간의 흥분되는 감정이나 상황에 쉽게 빠져들며, 주위 사람들 역시 그런 느낌을 만끽하기를 원합니다. 다른 이들을 위로하고 용기를 북돋아 주는 데 이들보다 더 많은 시간과 에너지를 소비하는 사람 없을 겁니다. 더욱이나 다른 유형의 사람과는 비교도 안 될 만큼 거부할 수 없는 매력으로 말이죠.",
    img: "image/ESFP.png",
  },
  ESFJ: {
    subtitle: "사교적인 외교관 아기사자(ESFJ)",
    explain:
      "ESFJ 유형인 사교형 사람을 한마디로 정의 내리기는 어렵지만, 간단히 표현하자면 이들은 ‘인기쟁이’입니다. 인구의 대략 12%를 차지하는 꽤 보편적인 성격 유형으로, 이를 미루어 보면 왜 이 유형의 사람이 인기가 많은지 이해가 갑니다. 이들은 분위기를 좌지우지하며 여러 사람의 스포트라이트를 받거나 학교에 승리와 명예를 불러오도록 팀을 이끄는 역할을 하기도 합니다. 이들은 또한 훗날 다양한 사교 모임이나 어울림을 통해 주위 사람들에게 끊임없는 관심과 애정을 보임으로써 다른 이들을 행복하고 즐겁게 해주고자 노력합니다.",
    img: "image/ESFJ.png",
  },
  ENTP: {
    subtitle: "뜨거운 논쟁을 즐기는 혁명가형 아기사자(ENTP)",
    explain:
      "변론가형 사람은 타인이 믿는 이념이나 논쟁에 반향을 일으킴으로써 군중을 선동하는 일명 선의의 비판자입니다. 결단력 있는 성격 유형이 논쟁 안에 깊이 내재한 숨은 의미나 상대의 전략적 목표를 꼬집기 위해 논쟁을 벌인다고 한다면, 변론가형 사람은 단순히 재미를 이유로 비판을 일삼습니다. 아마도 이들보다 논쟁이나 정신적 고문을 즐기는 성격 유형은 없을 것입니다. 이는 천부적으로 재치 있는 입담과 풍부한 지식을 통해 논쟁의 중심에 있는 사안과 관련한 그들의 이념을 증명해 보일 수 있기 때문입니다. ENTP 특징은 본인이 구상하는 바를 실현시키고 싶어 하는 기질이 강하며, 여기에 특유의 아웃사이더적인 성격까지 겹쳐 말 그대로 혁명가의 기질을 띠고 있습니다.",
    img: "image/ENTP.png",
  },
  ENTJ: {
    subtitle: "대담한 통솔자 아기사자(ENTJ)",
    explain:
      "천성적으로 타고난 리더입니다. 이 유형에 속하는 사람은 넘치는 카리스마와 자신감으로 공통의 목표 실현을 위해 다른 이들을 이끌고 진두지휘합니다. 예민한 성격의 사회운동가형 사람과 달리 이들은 진취적인 생각과 결정력, 그리고 냉철한 판단력으로 그들이 세운 목표 달성을 위해 가끔은 무모하리만치 이성적 사고를 하는 것이 특징입니다. ENTJ는 인구의 단 3%에 해당하는 유형입니다.",
    img: "image/ENTJ.png",
  },
  ENFP: {
    subtitle: "재기발랄한 활동가 아기사자(ENFP)",
    explain:
      "자유로운 사고의 소유자입니다. 종종 분위기 메이커 역할을 하기도 하는 이들은 단순한 인생의 즐거움이나 그때그때 상황에서 주는 일시적인 만족이 아닌 타인과 사회적, 정서적으로 깊은 유대 관계를 맺음으로써 행복을 느낍니다. 매력적이며 독립적인 성격으로 활발하면서도 인정이 많은 이들은 인구의 대략 7%에 속하며, 어느 모임을 가든 어렵지 않게 만날 수 있습니다.",
    img: "image/ENFP.png",
  },
  ENFJ: {
    subtitle: "언변능숙형 아기사자(ENFJ)",
    explain:
      "상당히 이타적이고 민첩하고 인화를 중요시하며 참을성이 많으며, 다른 사람들의 생각이나 의견에 진지한 관심을 가지고 공동선을 위하여 다른 사람의 의견에 대체로 동의합니다. 미래의 가능성을 추구하며 편안하고 능란하게 계획을 제시하고 집단을 이끌어가는 능력이 있습니다. 때로 다른 사람들의 좋은 점을 지나치게 이상화하는 경향이 있으며 다른 사람들에 대해서도 자기와 같을 것이라고 생각하는 경향이 있습니다.",
    img: "image/ENFJ.png",
  },
};
