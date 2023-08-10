async function productsList (){
    const conexao = await fetch("http://localhost:3000/products");
    const conexaoConvertida = await conexao.json();
    return { conexaoConvertida, statusConexao: conexao.status };
}

async function searchProducts(searchTerm) {
    const conexao = await fetch("http://localhost:3000/products?q="+searchTerm);
    const conexaoConvertida = await conexao.json();
    return { conexaoConvertida, statusConexao: conexao.status };
}

async function searchProductById(productId) {
    const conexao = await fetch("http://localhost:3000/products");
    const conexaoConvertida = await conexao.json();
    const produtoEncontrado = conexaoConvertida.find(products => products.id == productId);
    return { conexaoConvertida: produtoEncontrado, statusConexao: conexao.status };
}

export const conectApi = {
    productsList,
    searchProducts,
    searchProductById
}
