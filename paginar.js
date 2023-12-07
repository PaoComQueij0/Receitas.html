
        function showRecipe(recipeNumber) {
            // Esconde todas as receitas
            var recipes = document.getElementsByClassName('recipe');
            for (var i = 0; i < recipes.length; i++) {
                recipes[i].style.display = 'none';
            }

            // Exibe a receita selecionada
            var recipe = document.getElementById('recipe' + recipeNumber);
            recipe.style.display = 'block';
        }
    