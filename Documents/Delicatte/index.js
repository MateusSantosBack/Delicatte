const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',      
  password: 'senai', 
  database: 'Delicatte'
});

// 2. Função para Adicionar um Ovo de Páscoa
function adicionarOvo(nome, gramas, preco, estoque, categoria) {
  const sql = `INSERT INTO produtos_pascoa (nome, tamanho_gramas, preco_venda, quantidade_estoque, categoria) 
               VALUES (?, ?, ?, ?, ?)`;
  
  connection.query(sql, [nome, gramas, preco, estoque, categoria], (err, results) => {
    if (err) throw err;
    console.log('✅ Ovo adicionado com sucesso! ID:', results.insertId);
  });
}

// 3. Função para Ver o Estoque
function verEstoque() {
  connection.query('SELECT * FROM produtos_pascoa', (err, rows) => {
    if (err) throw err;
    console.log('\n--- 🐰 ESTOQUE ATUAL DA DELICATTE ---');
    console.table(rows); // Exibe em formato de tabela bonitinho no terminal
  });
}

// --- TESTANDO ---
// Primeiro adicionamos um, depois listamos
adicionarOvo('Ovo de Colher Ninho', 350, 65.00, 10, 'Gourmet');

setTimeout(() => {
    verEstoque();
}, 1000);