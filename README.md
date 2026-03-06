<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas</title>
 <script src= "script.js" defer> </script>
<style>
       body { font-family: sans-serif; background-color: #f8f9fa; display: flex; justify-content: center; padding: 20px; }
        .container { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); width: 350px; }
        input { width: 70%; padding: 8px; margin-bottom: 10px; }
        button { padding: 8px; cursor: pointer; background-color: #28a745; color: white; border: none; border-radius: 4px; }
        .btn-remover { background-color: #dc3545; }
        .btn-pesquisar { background-color: #007bff; width: 100%; margin-top: 5px; }
        ul { list-style: none; padding: 0; }
        li { background: #eee; margin: 5px 0; padding: 10px; display: flex; justify-content: space-between; align-items: center; border-radius: 4px; }
    </style>
</head>

<body>
   <div class="container">
    <h2>Lista de Compras:</h2>
    
    <input type="text" id="itemInput" placeholder="Nome do produto...">
    <button onclick="adicionar()">Add</button>

    <hr>

    <input type="text" id="buscaInput" placeholder="Nome ou Posição (0, 1...)">
    <button class="btn-pesquisar" onclick="pesquisar()">Pesquisar</button>

    <ul id="listaExibicao"></ul>
</div>
</body>
</html>
