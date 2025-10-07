<script setup lang="ts">
const testimonials = [
  {
    id: 1,
    name: 'Caio Correia',
    title: 'Scrum Master',
    company: 'Target Work',
    image: caioImage,
    message: 'No meu tempo supervisionando o Gabriel, ele se mostrou uma pessoa capaz de assumir desenvolvimentos e projetos complexos para serem desenvolvidos, mesmo com o pouco tempo de experiência que ele tinha na área. Além disso, ele é extremamente comunicativo, o que tornava mais fácil transmitir as tarefas para ele de modo que entendesse exatamente o que estava sendo pedido.',
  },
  {
    id: 2,
    name: 'Michael Castro',
    title: 'Gestor',
    company: 'GlobalTera',
    image: michaelImage,
    message: 'Gabriel foi realmente um destaque no nosso time de suporte, entrou como JR mas chegou assumindo diversas responsabilidades. Sua dedicação incansável e habilidades excepcionais foram fundamentais para a eficiência da equipe. Além disso, sua atitude positiva e disposição para assumir responsabilidades adicionais fizeram dele um colega valioso. Sem dúvida, eu o recomendaria como uma adição incrível a qualquer time. Sua visão de trabalho em equipe e encorajamento nos profissionais mais novos ou com menos experiência sempre foi um diferencial, carismático e com uma comunicação indispensável. Tive o prazer e a honra de trabalhar com esse jovem que apesar da idade tem uma cabeça pensante incrível. .',
  },
  {
    id: 3,
    name: 'Allyson Alves',
    title: 'Desenvolvedor FullStack',
    company: 'Target Work',
    image: allysonImage,
    message: 'Gabriel é um excelente desenvolvedor .NET C# com quem tive a oportunidade de trabalhar. Sua habilidade técnica é impressionante, e sua abordagem prática para resolver desafios torna-o um membro valioso da equipe. O que diferencia Gabriel não é apenas seu conhecimento técnico, mas sua postura proativa em busca constante de aprendizado e crescimento profissional. Sua dedicação em expandir seu conhecimento contribui de forma notável para o sucesso do projetos, adicionando um toque inspirador ao ambiente de trabalho.',
  },
];
import { onMounted, ref, onUnmounted } from 'vue';
import AuroraBackground from './components/ui/AuroraBackground.vue';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input'; // Adicionado para o campo de assunto
import { Textarea } from '@/components/ui/textarea'; // Adicionado para o corpo do email

import caioImage from './assets/CaioCorreia.jpg'; 
import michaelImage from './assets/MichaelCastro.png';
import allysonImage from './assets/AllysonAlves.png';
import myImageAvatar from './assets/myImage.jpg'

//Sobre Mim
const myName = 'Gabriel Lamas';
const myTitle = 'FullStack Developer | Vue.js e C#/.NET';

const myImage = myImageAvatar; 

const aboutMeText = `
Olá! Sou Gabriel Lamas, um Desenvolvedor FullStack apaixonado por construir soluções eficientes e escaláveis. Minha jornada tem se concentrado na criação de interfaces dinâmicas usando Vue.js e na construção de APIs robustas com C# e o ecossistema .NET.
Desde o início da minha carreira, busco sempre aprimorar minhas habilidades em arquitetura de software e boas práticas de codificação. Acredito que a comunicação transparente e a dedicação contínua são a chave para o sucesso de qualquer projeto de tecnologia.
No meu tempo livre, adoro mergulhar em novas tecnologias e contribuir para a comunidade de desenvolvedores. Vamos construir algo incrível juntos!
`;


const isNavVisible = ref(true);
const auroraRef = ref(null);

const activeSection = ref('sobre-mim');

const emailSubject = ref('');
const emailBody = ref('');
const targetEmail = 'GLamas.dev@gmail.com';

const sendEmail = () => {
  const subject = encodeURIComponent(emailSubject.value);
  const body = encodeURIComponent(emailBody.value);
  window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
};


const sectionIds = [
  'sobre-mim',
  'habilidades',
  'formacao',
  'experiencia',
  'recomendacoes',
  'contato',
];

const handleScroll = () => {
  if (auroraRef.value) {
    const auroraHeight = (auroraRef.value as HTMLElement).offsetHeight;
    isNavVisible.value = window.scrollY === 0 || window.scrollY < auroraHeight * 0.8;
  } else {
    isNavVisible.value = window.scrollY === 0;
  }

  // Detectar seção ativa
  let currentSection: string = sectionIds[0] || '';
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom > 120) {
        currentSection = id;
        break;
      }
    }
  }
  activeSection.value = currentSection;
};

onMounted(() => {
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const skills = {
  'Linguagens & Frameworks': [
    { name: 'C#', devicon: 'csharp', color: 'text-purple-400' },
    { name: 'Vue.js', devicon: 'vuejs', color: 'text-emerald-400' },
    { name: '.NET', devicon: 'dotnet', color: 'text-blue-500' },
    { name: 'JavaScript', devicon: 'javascript', color: 'text-yellow-400' },
    { name: 'TypeScript', devicon: 'typescript', color: 'text-blue-400' },
    { name: 'React', devicon: 'react', color: 'text-sky-400' },
    { name: 'Python', devicon: 'python', color: 'text-yellow-600' },
    { name: 'C', devicon: 'c', color: 'text-gray-500' },
    { name: 'Ruby', devicon: 'ruby', color: 'text-red-500' },
  ],
  'Banco de Dados': [
    { name: 'SQL Server', devicon: 'microsoftsqlserver', color: 'text-red-500' },
    { name: 'PostgreSQL', devicon: 'postgresql', color: 'text-blue-600' },
    { name: 'MongoDB', devicon: 'mongodb', color: 'text-green-500' },
    { name: 'DynamoDB', devicon: 'amazonwebservices', color: 'text-orange-500' },
  ],
  'Cloud & DevOps': [
    { name: 'Azure', devicon: 'azure', color: 'text-sky-500' },
    { name: 'AWS', devicon: 'amazonwebservices', color: 'text-orange-400' },
    { name: 'Docker', devicon: 'docker', color: 'text-blue-400' },
    { name: 'Kubernetes', devicon: 'kubernetes', color: 'text-indigo-500' },
    { name: 'Jenkins', devicon: 'jenkins', color: 'text-red-700' },
    { name: 'Rancher', devicon: 'rancher', color: 'text-green-600' },
    { name: 'RabbitMQ', devicon: 'rabbitmq', color: 'text-orange-600' },
    { name: 'SignalR', devicon: 'dotnet', color: 'text-red-400' },
  ],
};
const experiences = [
  {
    id: 1,
    role: 'Desenvolvedor Full Stack',
    company: 'TIPLAN',
    companyLink: '#', // Substitua pelo link real depois
    type: 'Tempo integral',
    duration: 'out de 2025 - o momento (1 mês)',
    location: 'Rio de Janeiro',
    isCurrent: true,
  },
  {
    id: 2,
    role: 'Desenvolvedor Full Stack | .NET | C#',
    company: 'Target Work',
    companyLink: '#',
    type: 'Terceirizado',
    duration: 'jul de 2023 - out de 2025 (2 anos 4 meses)',
    location: 'Rio de Janeiro, Brasil · Remota',
    isCurrent: false,
  },
  {
    id: 3,
    role: 'Assistente de TI',
    company: 'GlobalTera',
    companyLink: '#',
    type: 'Tempo integral',
    duration: 'jan de 2023 - jul de 2023 (7 meses)',
    location: 'Barra da Tijuca, Rio de Janeiro · Presencial',
    isCurrent: false,
  },
  {
    id: 4,
    role: 'Analista de Qualidade e Suporte',
    company: 'Nuvor',
    companyLink: '#',
    type: 'Temporário',
    duration: 'mar de 2023 - mai de 2023 (3 meses)',
    location: 'Rio de Janeiro, Brasil',
    isCurrent: false,
  },
];

const educations = [
  {
    id: 1,
    course: 'C#',
    type: 'Curso Profissionalizante',
    institution: 'Udemy',
    duration: '2022',
    location: 'Online',
  },
  {
    id: 2,
    course: 'Arquitetura de Software',
    type: 'MBA',
    institution: 'PUC-Rio',
    duration: '2024 - 2025',
    location: 'Rio de Janeiro',
  },
  {
    id: 3,
    course: 'Ensino Médio Técnico em Informática',
    type: 'Ensino Médio Técnico',
    institution: 'FAETEC',
    duration: '2018 - 2020',
    location: 'Rio de Janeiro',
  },
  {
    id: 4,
    course: 'Análise e Desenvolvimento de Sistemas',
    type: 'Faculdade',
    institution: 'Estácio',
    duration: '2021 - 2023',
    location: 'Rio de Janeiro',
  },
  {
    id: 5,
    course: 'Vue.js Completo',
    type: 'Curso Profissionalizante',
    institution: 'Alura',
    duration: '2023',
    location: 'Online',
  },
];

</script>

<template>
  <nav 
    :class="{ 
      'transform translate-y-0 opacity-100': isNavVisible, 
      'transform -translate-y-full opacity-0': !isNavVisible 
    }"
    class="fixed top-0 left-0 w-full z-[100] bg-transparent border-b-0 transition-all duration-300 ease-in-out"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center h-16">
        <div class="flex items-center space-x-2 sm:space-x-4">
          <div class="hidden sm:flex sm:space-x-4">
            <a href="#sobre-mim">
              <Button
                variant="ghost"
                :class="[activeSection === 'sobre-mim' ? 'text-indigo-400 font-bold underline underline-offset-4' : 'text-white hover:text-indigo-400']"
              >
                Sobre mim
              </Button>
            </a>
            <a href="#habilidades">
              <Button
                variant="ghost"
                :class="[activeSection === 'habilidades' ? 'text-indigo-400 font-bold underline underline-offset-4' : 'text-white hover:text-indigo-400']"
              >
                Habilidades
              </Button>
            </a>
            <a href="#formacao">
              <Button
                variant="ghost"
                :class="[activeSection === 'formacao' ? 'text-indigo-400 font-bold underline underline-offset-4' : 'text-white hover:text-indigo-400']"
              >
                Formação
              </Button>
            </a>
            <a href="#experiencia">
              <Button
                variant="ghost"
                :class="[activeSection === 'experiencia' ? 'text-indigo-400 font-bold underline underline-offset-4' : 'text-white hover:text-indigo-400']"
              >
                Experiência
              </Button>
            </a>
            <a href="#recomendacoes">
              <Button
                variant="ghost"
                :class="[activeSection === 'recomendacoes' ? 'text-indigo-400 font-bold underline underline-offset-4' : 'text-white hover:text-indigo-400']"
              >
                Recomendações
              </Button>
            </a>
          </div>
          <div class="hidden sm:flex">
            <a href="#contato">
              <Button
                variant="secondary"
                :class="[activeSection === 'contato' ? 'ring-2 ring-indigo-400' : '']"
              >
                Currículo & Contato
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
  <div class="min-h-screen"> 
    
    <AuroraBackground ref="auroraRef">
      <h1 class="text-4xl md:text-7xl font-bold text-center text-white relative z-20">
        Gabriel Lamas 
      </h1>
      <p class="font-extralight text-base md:text-4xl text-neutral-200 py-4 relative z-20">
        FullStack Developer.
      </p>
    </AuroraBackground>
    

    <section id="sobre-mim" class="py-16 md:py-24 bg-card text-card-foreground">
      <div class="max-w-4xl mx-auto px-6">
        <div>
          <h3 class="text-4xl font-extrabold mb-1 text-foreground">
            {{ myName }}
          </h3>
          <p class="text-xl font-medium mb-6 text-muted-foreground">
            {{ myTitle }}
          </p>
          <p class="text-lg leading-relaxed whitespace-pre-line text-card-foreground">
            {{ aboutMeText }}
          </p>
        </div>
      </div>
    </section>

    <section id="habilidades" class="py-16 md:py-24 bg-muted/20 text-card-foreground">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl font-bold mb-12 text-center text-foreground">
          Minhas Habilidades Técnicas
        </h2>
        <div class="space-y-12">
          <div v-for="(categorySkills, categoryName) in skills" :key="categoryName">
            <h3 class="text-2xl font-semibold mb-6 border-b border-primary/20 pb-2 text-foreground">
              {{ categoryName }}
            </h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              <Card 
                v-for="skill in categorySkills" 
                :key="skill.name" 
                class="hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-[1.05] cursor-pointer bg-card/70 border-primary/30"
              >
                <CardContent class="flex flex-col items-center justify-center p-4 h-full">
                      <div class="flex flex-col items-center justify-center">
                        <i
                          :class="[
                            'devicon-' + skill.devicon + '-plain',
                            'text-4xl mb-2',
                            skill.color
                          ]"
                        ></i>
                        <span class="flex items-center gap-2 text-lg font-medium text-foreground text-center">
                          <i
                            :class="[
                              'devicon-' + skill.devicon + '-plain',
                              'text-xl',
                              skill.color
                            ]"
                            style="margin-bottom: 0 !important;"
                          ></i>
                          {{ skill.name }}
                        </span>
                      </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formação -->
    <section id="formacao" class="py-16 md:py-24 bg-muted/40 text-card-foreground">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-4xl font-bold mb-12 text-center text-foreground">Formação</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card v-for="edu in educations" :key="edu.id" class="hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-[1.03] cursor-pointer bg-card/70 border-primary/30">
            <CardContent class="p-6">
              <div class="mb-2">
                <span class="text-xl font-bold text-foreground">{{ edu.course }}</span>
                <span class="ml-2 text-sm text-primary/80 font-semibold">- {{ edu.type }}</span>
              </div>
              <div class="text-base text-muted-foreground mb-1">{{ edu.institution }}</div>
              <div class="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span>{{ edu.duration }}</span>
                <span>•</span>
                <span>{{ edu.location }}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Experiência -->
    <section id="experiencia" class="py-16 md:py-24 bg-background text-card-foreground">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-4xl font-bold mb-12 text-center text-foreground">
          Experiência Profissional
        </h2>
        <div class="relative">
          <div class="absolute inset-y-0 left-1/2 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"></div>
          <div v-for="(exp, index) in experiences" :key="exp.id" class="mb-10 flex">
            <div class="w-full flex md:w-full">
              <div
                :class="[
                  'w-full md:w-1/2',
                  index % 2 === 0 ? 'md:pl-10 md:text-left md:justify-start' : 'md:pr-10 md:text-right md:justify-end',
                  'flex relative'
                ]"
              >
                <div
                  :class="[
                    'w-full opacity-0 [animation-fill-mode:forwards] transition-all duration-300',
                    index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                  ]"
                  :style="{ 'animation-delay': `${index * 0.2}s` }"
                >
                  <a :href="exp.companyLink" target="_blank" class="block focus:outline-none">
                    <Card class="h-full shadow-xl hover:shadow-primary/50 border-primary/30 transition-all duration-300 hover:scale-[1.03] bg-card cursor-pointer">
                      <CardContent class="p-6">
                        <div class="mb-2">
                          <span class="text-xl font-bold text-foreground">{{ exp.role }}</span>
                        </div>
                        <div class="flex items-center mb-1">
                          <span class="text-lg font-semibold text-primary/80">{{ exp.company }}</span>
                          <span class="ml-2 text-xs text-muted-foreground">{{ exp.duration }}</span>
                        </div>
                        <div class="text-sm text-muted-foreground mb-1">{{ exp.type }} - {{ exp.location }}</div>
                        <div class="flex flex-wrap gap-2 text-xs text-muted-foreground">
                          <span>{{ exp.isCurrent ? 'Atual' : 'Antiga' }}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </div>
                <div
                  :class="[
                    'absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full z-10 hidden md:block',
                    index % 2 === 0 ? 'md:left-full md:transform md:-translate-x-1/2' : 'md:right-full md:transform md:translate-x-1/2'
                  ]"
                ></div>
              </div>
              <div v-if="index % 2 === 0" class="hidden md:block md:w-1/2"></div>
              <div v-else class="hidden md:block md:w-1/2 order-first"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  <!-- Recomendações -->
  <section id="recomendacoes" class="p-8 md:p-16 bg-primary/10">
      <h2 class="text-4xl font-bold mb-10 text-center text-foreground">
        Recomendações
      </h2>
      <Carousel
        :opts="{ align: 'center', loop: true }"
        class="w-full max-w-4xl mx-auto"
      >
        <CarouselContent class="-ml-4 items-stretch">
          <CarouselItem v-for="testimonial in testimonials" :key="testimonial.id" class="basis-4/5 pl-4 h-full">
            <Card class="h-full shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent class="flex flex-col p-6 h-full">
                <div class="flex items-center space-x-4 mb-4">
                  <Avatar class="h-16 w-16 md:h-20 md:w-20">
                    <AvatarImage :src="testimonial.image" :alt="testimonial.name" />
                    <AvatarFallback>{{ testimonial.name.charAt(0) }}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p class="text-xl font-semibold text-foreground">
                      {{ testimonial.name }}
                    </p>
                    <p class="text-sm text-muted-foreground">
                      {{ testimonial.title }} <span class="font-bold">- {{ testimonial.company }}</span>
                    </p>
                  </div>
                </div>
                <p class="text-card-foreground italic flex-grow text-base md:text-lg">
                  "{{ testimonial.message }}"
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>

<!-- Seção vazia de formação removida -->


    <section id="contato" class="py-16 md:py-24 bg-primary/20">
      <h2 class="text-4xl font-bold mb-12 text-center text-foreground">
        Currículo & Contato
      </h2>
      <div class="max-w-4xl mx-auto px-6">
        <div class="flex flex-col md:flex-row md:space-x-12">
          
          <div class="md:w-1/3 mb-10 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 class="text-2xl font-semibold mb-4 text-foreground">
              Documentos Importantes
            </h3>
            <p class="text-muted-foreground mb-6">
              Baixe meu currículo completo ou acesse meu perfil profissional.
            </p>
            <a href="/src/assets/Gabriel%20Lamas%20-%20CV.pdf" download class="w-full md:w-auto">
              <Button size="lg" class="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg">
                <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v7a1 1 0 11-2 0V3a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
                Baixar Currículo (PDF)
              </Button>
            </a>
            
            <a href="https://www.linkedin.com/in/gabriel-lamas-dev/" target="_blank" class="mt-4">
              <Button variant="outline" class="w-full md:w-auto text-foreground border-foreground/50 hover:bg-background">
                Ver Perfil do LinkedIn
              </Button>
            </a>
          </div>

          <Card class="md:w-2/3 flex-grow shadow-2xl">
            <CardContent class="p-6">
              <h3 class="text-2xl font-semibold mb-4 text-foreground">
                Envie uma Mensagem Direta
              </h3>
              <form @submit.prevent="sendEmail" class="space-y-4">
                <div>
                  <label for="subject" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Assunto</label>
                  <Input 
                    id="subject" 
                    v-model="emailSubject" 
                    type="text" 
                    placeholder="Ex: Proposta de Vaga FullStack" 
                    required 
                  />
                </div>
                <div>
                  <label for="body" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Corpo da Mensagem</label>
                  <Textarea 
                    id="body" 
                    v-model="emailBody" 
                    placeholder="Sua mensagem detalhada aqui..." 
                    rows="6" 
                    required 
                  />
                </div>
                <Button type="submit" class="w-full">
                  Enviar E-mail para GLamas.dev@gmail.com
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
  <footer class="w-full bg-background border-t border-primary/10 py-8 mt-12">
    <div class="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span class="text-base text-muted-foreground">Desenvolvido por Gabriel Lamas</span>
      <div class="flex gap-4 text-2xl">
        <a href="https://github.com/LMXSS" target="_blank" aria-label="GitHub" class="hover:text-indigo-400 transition-colors">
          <i class="devicon-github-original"></i>
        </a>
        <a href="https://twitter.com/gabriellamasdev" target="_blank" aria-label="Twitter/X" class="hover:text-indigo-400 transition-colors">
          <i class="devicon-twitter-original"></i>
        </a>
        <a href="https://instagram.com/gabriellamas.dev" target="_blank" aria-label="Instagram" class="hover:text-indigo-400 transition-colors">
          <i class="devicon-instagram-plain"></i>
        </a>
        <a href="https://www.linkedin.com/in/gabriel-lamas-dev/" target="_blank" aria-label="LinkedIn" class="hover:text-indigo-400 transition-colors">
          <i class="devicon-linkedin-plain"></i>
        </a>
      </div>
    </div>
  </footer>
</template>