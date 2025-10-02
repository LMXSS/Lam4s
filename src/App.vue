<script setup lang="ts">
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

const emailSubject = ref('');
const emailBody = ref('');
const targetEmail = 'GLamas.dev@gmail.com';

const sendEmail = () => {
  const subject = encodeURIComponent(emailSubject.value);
  const body = encodeURIComponent(emailBody.value);
  window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
};

const handleScroll = () => {
  if (auroraRef.value) {
    const auroraHeight = (auroraRef.value as HTMLElement).offsetHeight;
    
    isNavVisible.value = window.scrollY === 0 || window.scrollY < auroraHeight * 0.8;
  } else {
    isNavVisible.value = window.scrollY === 0;
  }
};

onMounted(() => {
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

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

const experiences = [
  {
    id: 1,
    role: 'Desenvolvedor Full Stack',
    company: 'TIPLAN',
    type: 'Tempo integral',
    duration: 'out de 2025 - o momento (1 mês)',
    location: 'Rio de Janeiro',
    isCurrent: true,
  },
  {
    id: 2,
    role: 'Desenvolvedor Full Stack | .NET | C#',
    company: 'Target Work',
    type: 'Terceirizado',
    duration: 'jul de 2023 - out de 2025 (2 anos 4 meses)',
    location: 'Rio de Janeiro, Brasil · Remota',
    isCurrent: false,
  },
  {
    id: 3,
    role: 'Assistente de TI',
    company: 'GlobalTera',
    type: 'Tempo integral',
    duration: 'jan de 2023 - jul de 2023 (7 meses)',
    location: 'Barra da Tijuca, Rio de Janeiro · Presencial',
    isCurrent: false,
  },
  {
    id: 4,
    role: 'Analista de Qualidade e Suporte',
    company: 'Nuvor',
    type: 'Temporário',
    duration: 'mar de 2023 - mai de 2023 (3 meses)',
    location: 'Rio de Janeiro, Brasil',
    isCurrent: false,
  },
];

// --- Estrutura de Habilidades com Ícones Devicon-style (caminhos SVG simplificados 24x24) ---
const skills = {
  'Linguagens & Frameworks': [
    { name: 'C#', color: 'text-purple-400', icon: 'M13.5 10.5h-3c-.414 0-.75.336-.75.75v3c0 .414.336.75.75.75h3c.414 0 .75-.336.75-.75v-3c0-.414-.336-.75-.75-.75zM12 21a9 9 0 100-18 9 9 0 000 18z' },
    { name: 'Vue.js', color: 'text-emerald-400', icon: 'M1.5 6.75l10.5 18 10.5-18H1.5zM12 11.25l-4.5 7.5h9L12 11.25z' },
    { name: '.NET', color: 'text-blue-500', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-2 10h4v2h-4v-2z' }, 
    { name: 'JavaScript', color: 'text-yellow-400', icon: 'M12 21.75c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zM12 3.75c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5 7.5-3.358 7.5-7.5-3.358-7.5-7.5-7.5zM12 12a1 1 0 100-2 1 1 0 000 2z' },
    { name: 'TypeScript', color: 'text-blue-400', icon: 'M12 21a9 9 0 100-18 9 9 0 000 18zm-2.5-9.75h5v-3h-5v3zM12 12h1.5v3H9.75v-3h1.5z' },
    { name: 'React', color: 'text-sky-400', icon: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 12a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM6.5 12a.5.5 0 11-1 0 .5.5 0 011 0zm11 0a.5.5 0 11-1 0 .5.5 0 011 0z' },
    { name: 'Python', color: 'text-yellow-600', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-2 12h-2v-4h2v4zm4 0h2v-4h-2v4z' },
    { name: 'C', color: 'text-gray-500', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM12 8a4 4 0 00-4 4 4 4 0 004 4v-2a2 2 0 01-2-2 2 2 0 012-2v-2z' },
    { name: 'Ruby', color: 'text-red-500', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z' },
  ],
  'Banco de Dados': [
    { name: 'SQL Server', color: 'text-red-500', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM7 10h10v2H7v-2zM7 14h10v2H7v-2z' },
    { name: 'PostgreSQL', color: 'text-blue-600', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 14.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z' },
    { name: 'MongoDB', color: 'text-green-500', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-6 10a6 6 0 1112 0 6 6 0 01-12 0z' },
    { name: 'DynamoDB', color: 'text-orange-500', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-4 10a4 4 0 018 0 4 4 0 01-8 0z' },
  ],
  'Cloud & DevOps': [
    { name: 'Azure', color: 'text-sky-500', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-3.5 12l-1.5 3h10l-1.5-3h-7z' },
    { name: 'AWS', color: 'text-orange-400', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-3.5 12l1.5-3h4l1.5 3h-7z' },
    { name: 'Docker', color: 'text-blue-400', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM9 13h2v2H9v-2zm4 0h2v2h-2v-2zm-4-4h2v2H9V9zm4 0h2v2h-2V9z' },
    { name: 'Kubernetes', color: 'text-indigo-500', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 00-6 6h2a4 4 0 018 0h2a6 6 0 00-6-6z' }, 
    { name: 'Jenkins', color: 'text-red-700', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-2 10h4v2h-4v-2zM10 8h4v2h-4V8z' },
    { name: 'Rancher', color: 'text-green-600', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-2 8h4l-2 4-2-4z' },
    { name: 'RabbitMQ', color: 'text-orange-600', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a2 2 0 110 4 2 2 0 010-4zm-4 8a2 2 0 110 4 2 2 0 010-4zm8 0a2 2 0 110 4 2 2 0 010-4z' },
    { name: 'SignalR', color: 'text-red-400', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-2 6h4v8h-4V8z' },
  ],
};
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
                <Button variant="ghost" class="text-white hover:text-indigo-400">
                  Sobre mim
                </Button>
              </a>
              <a href="#habilidades">
                <Button variant="ghost" class="text-white hover:text-indigo-400">
                  Habilidades
                </Button>
              </a>
              <a href="#formacao">
                <Button variant="ghost" class="text-white hover:text-indigo-400">
                  Formação
                </Button>
              </a>
              <a href="#experiencia">
                <Button variant="ghost" class="text-white hover:text-indigo-400">
                  Experiência
                </Button>
              </a>
              <a href="#recomendacoes">
                <Button variant="ghost" class="text-white hover:text-indigo-400">
                  Recomendações
                </Button>
              </a>
            </div>
            
            <div class="hidden sm:flex">
              <a href="#contato">
                <Button variant="secondary">
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
        <div class="flex flex-col md:flex-row items-start md:space-x-8">
          
          <div class="flex-shrink-0 mb-8 md:mb-0 mx-auto md:mx-0">
            <Avatar class="h-32 w-32 md:h-48 md:w-48">
              <AvatarImage :src="myImage" :alt="myName" />
              <AvatarFallback>{{ myName.charAt(0) }}</AvatarFallback>
            </Avatar>
          </div>

          <div class="flex-grow">
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
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-8 w-8 mb-2 transition-colors duration-300" 
                    :class="[skill.color]"
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    stroke="none" 
                  >
                    <path v-if="skill.icon" :d="skill.icon" />
                    <path v-else d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 16a4 4 0 110-8 4 4 0 010 8z" /> 
                  </svg>
                  
                  <p class="text-lg font-medium text-foreground text-center">
                    {{ skill.name }}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="formacao" class="h-screen bg-muted/40"></section>
    <section id="experiencia" class="h-screen bg-muted/60"></section>

    <section id="recomendacoes" class="p-8 md:p-16 bg-background">
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

<section id="experiencia" class="py-16 md:py-24 bg-background text-card-foreground">
  <div class="max-w-4xl mx-auto px-6">
    <h2 class="text-4xl font-bold mb-12 text-center text-foreground">
      Experiência Profissional
    </h2>

    <div class="relative">
      <div class="absolute inset-y-0 left-1/2 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"></div>

      <div v-for="(exp, index) in experiences" :key="exp.id" class="mb-10 flex">
        
        <div 
          :class="{
            'md:pl-10 md:text-left': index % 2 === 0, // Cards pares (0, 2, ...) vêm da ESQUERDA
            'md:pr-10 md:text-right md:justify-end': index % 2 !== 0, // Cards ímpares (1, 3, ...) vêm da DIREITA
          }"
          class="w-full md:w-1/2 flex relative"
        >
          
          <div 
            :class="{
              // Animação e Delay
              'animate-slide-in-left': index % 2 === 0,
              'animate-slide-in-right': index % 2 !== 0,
            }"
            class="w-full opacity-0 [animation-fill-mode:forwards] transition-all duration-300"
            :style="{ 'animation-delay': `${index * 0.2}s` }"
          >
            <Card class="h-full shadow-xl hover:shadow-primary/50 border-primary/30 transition-all duration-300 hover:scale-[1.03] bg-card">
              <CardContent class="p-6">
                <div 
                  :class="{
                    'md:order-2 md:justify-end': index % 2 !== 0,
                    'md:order-1 md:justify-start': index % 2 === 0,
                  }"
                  class="flex items-center mb-3 text-sm font-medium text-muted-foreground"
                >
                  <span class="text-xs font-semibold text-primary px-2 py-0.5 rounded-full mr-2">
                    {{ exp.isCurrent ? 'Atual' : 'Antiga' }}
                  </span>
                  <span class="text-sm">
                    {{ exp.duration }}
                  </span>
                </div>
                
                <h3 class="text-xl font-bold mb-1 text-foreground">
                  {{ exp.role }}
                </h3>
                
                <p class="text-lg font-semibold text-primary/80">
                  {{ exp.company }}
                </p>
                
                <p class="text-sm text-muted-foreground mt-2">
                  {{ exp.type }} · {{ exp.location }}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div 
            :class="{
              'md:left-full md:transform md:-translate-x-1/2': index % 2 === 0,
              'md:right-full md:transform md:translate-x-1/2': index % 2 !== 0,
            }"
            class="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full z-10 hidden md:block"
          ></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="formacao" class="h-screen bg-muted/60"></section>


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
            <Button size="lg" class="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v7a1 1 0 11-2 0V3a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
              Baixar Currículo (PDF)
            </Button>
            
            <a href="https://linkedin.com/in/gabriel-lamas" target="_blank" class="mt-4">
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
</template>