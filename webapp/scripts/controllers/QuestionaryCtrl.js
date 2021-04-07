angular
  .module("tutor")
  .controller("QuestionaryCtrl", function ($scope, $location, User) {
    $scope.questions = [
      "Quantidade de automóveis de passeio exclusivamente para uso particular:",
      "Quantidade de empregados mensalistas, considerando apenas os que trabalham pelo menos cinco dias por semana: ",
      "Quantidade de máquinas de lavar roupa, excluindo tanquinho:",
      "Quantidade de banheiros:",
      "DVD, incluindo qualquer dispositivo que leia DVD e desconsiderando DVD de automóvel:",
      "Quantidade de geladeiras:",
      "Quantidade de freezers independentes ou parte da geladeira:",
      "Quantidade de microcomputadores, considerando computadores de mesa, laptops, notebooks e netbooks e desconsiderando tablets, palms ou smartphones",
      "Quantidade de lavadora de louças:",
      "Quantidade de fornos de micro-ondas:",
      "Quantidade de motocicletas, desconsiderando as usadas exclusivamente para uso profissional:",
      "Quantidade de máquinas secadoras de roupas, considerando lava e seca:",
    ];
    $scope.answers = [];

    $scope.processAnswers = function () {
      var ans = $scope.answers;
      console.log(ans);



      var sum = ans.reduce(add, 0);

      function add(a, b) {
        return parseInt(a) + parseInt(b);
      }

      User.setAge($scope.age);
      User.setGender($scope.gender);
      User.setName($scope.name); 
      User.setEthnicity($scope.ethnicity);
      User.setSexualOrientation($scope.sexualOrientation);
      User.setCivilState($scope.civilState);
      User.setCity($scope.city);
      User.setEconomicState($scope.economicState); 
      User.setEmail($scope.email);
      User.setWhatsapp($scope.whatsapp);

      User.save();

      $location.path("/finish");

      /** $location.path("/finish"); */
    };
  });
