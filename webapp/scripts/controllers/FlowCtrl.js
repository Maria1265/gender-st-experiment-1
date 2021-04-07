angular
    .module("tutor")
    .controller(
        "FlowCtrl",
        function ($scope, $window, $location, configService, User) {
            var themes = ["default", "stFemale", "stMale"];

            var random = Math.floor(Math.random() * 10000) % 3;

            $scope.questions = [
                "Estava muito claro para mim como eu estava me saindo na atividade",
                "Não estava preocupado com o que os outros podiam estar pensando de mim",
                "Minhas habilidades combinavam com o desafio da atividade que estava fazendo",
                "As coisas pareciam estar acontecendo automaticamente",
                "A forma como o tempo passou parecia ser diferente do normal",
                "Eu sabia o que queria alcançar",
                "Tive uma sensação de total controle sobre o que estava fazendo",
                "A experiência me deixou com uma ótima sensação",
                "Estava completamente focado na tarefa em questão",
            ];
            $scope.answers = [];

            var time = new Date().getTime();

            $scope.processAnswers = function () {
                //console.log($scope.answers);
                //  validation
                if ($scope.answers.lenght < 8) {
                    $scope.msg = "Por favor, responda todas as perguntas!";
                } else {
                    function add(a, b) {
                        return parseInt(a) + parseInt(b);
                    }

                    var ans = $scope.answers;
                    console.log(ans);

               
                    

                    var sum = ans.reduce(add, 0);

                    console.log(ans);
                    console.log("FLOW: " + sum);

                    User.setFlowPoints(sum);
                    User.setFlow(ans);
                    User.setEndTime(time);
                    //User.save();

                    console.log(User.getResponse());
                    // User.save();
                    $location.path("/questionary");
                }
            };
        }
    );