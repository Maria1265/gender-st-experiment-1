var tutorServices = angular.module("tutor.services", []);

tutorServices.service("configService", function() {

    var opts = ["default", "stMale", "stFemale"];

    var random = Math.floor((Math.random() * 123457)) % 3;
    var currentTheme = opts[random];

    var currentBoost = "none";
    this.setRandomBoost = function() {
        var boost = ["none"];
        if (currentTheme == "stMale") {
            boost = [{
                 id: 'male4stem',
                 title: 'Homens assinam a maioria dos artigos científicos',
                 image: "assets/" + currentTheme + "/images/st-1.jpg",
                 content: 'Esse resultado se deve observa em diferentes areas, em especial nas áreas '+
                          'de Ciência, Tecnologia, Engenharia e Matemática, conhecidas pela sigla STEM em '+
                          'inglês (Science, Technology, Engineering and Mathematics). '+
                          'Os homens assinam 75% dos artigos nas áreas de Computação e de Matemática.',
                 href: 'https://www.gov.br/cnpq/pt-br/assuntos/noticias/destaque-em-cti/dia-internacional-de-mulheres-e-meninas-na-ciencia'
                }, {
                 id: 'male4enem',
                 title: 'Homens têm 72% das mil melhores notas do Enem',
                 image: "assets/" + currentTheme + "/images/st-2.jpg",
                 content: 'Mais de 70% dos estudantes que tiraram as mil maiores notas '+
                          'no Exame Nacional do Ensino Médio (Enem) são meninos. '+
                          'ENEM 2018 a nota dos participantes masculino é 52 pontos maior '+
                          'que ano passado em matemática.',
                 href: 'https://infograficos.estadao.com.br/educacao/enem/desigualdades-de-genero-e-raca/'
                }, {
                 id: 'male4tpe',
                 title: 'Porque a maioria de homens partem para exatas?',
                 image: "assets/" + currentTheme + "/images/st-3.jpg",
                 content: 'De acordo com o movimento Todos pela Educação (TPE) números apontam '+
                          'que grande proporção masculina tem desempenho considerado adequado em '+
                          'matemática. Esse é um dos motivos que explicam o por que a maior parte de '+
                          'homems partem para as exatas.',
                 href: 'https://revistaensinosuperior.com.br/explicar-diferencas-de-desempenho-em-matematica-e-por-que-poucas-mulheres-partem-para-as-exatas-e-missao-complexa/'
                }
            ];
        } else if (currentTheme == "stFemale") {
            boost = [{
                 id: 'female4math',
                 title: 'Medalha de ouro em olimpíada feminina de matemática',
                 image: "assets/" + currentTheme + "/images/st-0.jpg",
                 content: 'Em Olimpíada feminina de matemática na Ucrânia, '+
                          'Brasil conquistou medalha inédita de ouro.'+
                          'O Brasil mais uma vez se destacou em um evento '+
                          'internacional de matemática, desta vez trazendo uma '+
                          'inédita medalha de ouro. O prêmio foi conquistado na Olimpíada '+
                          'Europeia Feminina de Matemática (EGMO, na sigla em inglês).',
                 href: "https://www.gov.br/mec/pt-br/assuntos/noticias/brasil-conquista-inedita-medalha-de-ouro-em-olimpiada-feminina-de-matematica-na-ucrania"
                }, {
                 id: 'female4bolsas',
                 title: 'No Brasil, 53% das bolsas são preenchidas por mulheres',
                 image: "assets/" + currentTheme + "/images/st-1.jpg",
                 content: 'As mulheres representam 53% dos bolsistas de mestrado e doutorado no Brasil. '+
                          'Em cursos de pós-graduação ofertados pela Coordenação de Aperfeiçoamento de '+
                          'Pessoal de Nível Superior (Capes), elas preenchem 195 mil vagas das 364 mil matrículas. '+
                          'Além de estarem em alta na pesquisa, no ensino, no desenvolvimento da ciência, '+
                          'tecnologia e inovação brasileiras, as mulheres também apresentam número expressivos '+
                          'na produção de artigos científicos.',
                 href: "https://www.gov.br/pt-br/noticias/educacao-e-pesquisa/2020/03/no-brasil-53-das-bolsas-de-mestrado-e-doutorado-sao-preenchidas-por-mulheres"
                }, {
                 id: 'female4trigemeas',
                 title: 'Trigêmeas ganham a olimpíada de Matemática',
                 image: "assets/" + currentTheme + "/images/st-2.jpg",
                 content: 'As trigêmeas Fábia, Fabiele e Fabíola, '+
                          'jovens estudantes de Santa Leopoldina, da zona rural do Espírito Santo. '+
                          'Vivendo a 21 quilômetros da escola, numa propriedade sem acesso à internet, '+
                          'tiveram a ajuda dos pais e de uma professora abnegada. '+
                          'As trigêmeas, conquistaram as melhores notas do Espírito Santo na '+
                          '10ma Olimpíada Brasileira de Matemática das Escolas Públicas (OBMEP).',
                 href: "http://www.jornalnovotempo.com.br/index.php?option=com_k2&view=item&id=20276:ouro-na-matematica-trigemeas-do-es-nao-tinham-nem-internet-em-casa&Itemid=123"
                }
            ];
        }
        var idx = Math.floor((Math.random() * 123457)) % boost.length;
        return(boost[idx]);
    }
    currentBoost = this.setRandomBoost();

    var next = false;
    var badgeFlags = [false, false, false];

    this.setTheme = function(value) {
        console.log("setting theme: " + value);
        currentTheme = value;
        currentBoost = "none";
        if (value != "default") {
            currentBoost = this.setRandomBoost();
        }
    };

    this.getTheme = function() {
        return currentTheme;
    };

    this.getBoost = function() {
        return currentBoost;
    }

    this.getBoostTitle = function() {
        if (currentBoost != "none") {
            return currentBoost.title;
        }
        return "";
    }

    this.getBoostContent = function() {
        if (currentBoost != "none") {
            return currentBoost.content;
        }
        return "";
    }

    this.getBoostImage = function () {
        if (currentBoost != "none") {
            return currentBoost.image;
        }
        return "/assets/default/images/ufal.png";
    }

    this.getBoostHref = function() {
        if (currentBoost != "none") {
            return currentBoost.href;
        }
        return "/assets/default/images/ufal.png";
    }

    this.setNext = function(value) {
        next = value;
    };

    this.getNext = function() {
        return next;
    };

    this.addBadge = function(id) {
        badgeFlags[id] = true;
    };

    this.getBadges = function() {
        return badgeFlags;
    };

});

tutorServices.service("User", function($http) {

    var resp = {
        id: '',
        stType: "default",
        boost: "none",
        startTime: 0,
        endTime: 0,
        activityPoints: 0,
    };

    this.setRespId = function(value) {
        resp.id = value;
    }

    this.setStType = function(value) {
        resp.stType = value;
    };

    this.setBoost = function(value) {
        resp.boost = value;
    }

    this.setStartTime = function(value) {
        resp.startTime = value;
    };

    this.setEndTime = function(value) {
        resp.endTime = value;
    };

    this.setActivityPoints = function(value) {
        resp.activityPoints = value;
    };

    this.getResponse = function() {
        return resp;
    };

    this.save = function(fcallback) {
        $http({
            url: "/maria/save-response/"+resp.id,
            dataType: "json",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: resp
        }).then(function(response) { // success
            console.log("response sent!"); fcallback();
        }, function(response) { // failed
            console.error("Failed to submit participant response. " + response);
        });
    };

});
