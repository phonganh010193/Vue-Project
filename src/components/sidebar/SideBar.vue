<template>
    <div class="sidebar-container">
        <div className="sidebar-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
            <h5>Danh Mục Sản Phẩm</h5>
        </div>
        <div className="sidebar-content">
            <router-link to="/perfume/1">Nước hoa nam</router-link>
            <router-link to="/perfume-girl">Nước hoa nữ</router-link>
            <router-link to="#">Nước hoa nữ cao cấp trên 3 triệu</router-link>
            <router-link to="#">Nước hoa nữ dưới 1 triệu</router-link>
            <router-link to="#">Nước hoa nam cao cấp trên 3 triệu</router-link>
            <router-link to="#">Nước hoa nam dưới 1 triệu</router-link>
            <router-link to="#">LOUIS VUITION</router-link>
            <router-link to="#">CHANEL</router-link>
            <router-link to="#">KILIAN</router-link>
            <router-link to="#">DIOR</router-link>
            <router-link to="#">JO MALONE</router-link>
            <router-link to="#">CREED</router-link>
            <router-link to="#">DOLCE GABBALA</router-link>
            <router-link to="#">HERMES</router-link>
            <router-link to="#">GUICCI</router-link>
            <router-link to="#">LANCOME</router-link>
            <router-link to="#">Mỹ Phẩm</router-link>
            <router-link to="#">NARCISO RODRIGUEZ</router-link>
            <router-link to="#">VESARCE</router-link>
            <router-link to="#">JEAN PAUL GAULTIER</router-link>
            <router-link to="#">TOM FORD</router-link>
            <router-link to="#">CAROLINA HERRENA</router-link>
            <router-link to="#">HUGO BOSS</router-link>
            <router-link to="#">CLIVE CHRISTIAN</router-link>
            <router-link to="#">JEAN PAUL GAULTIER</router-link>
            <router-link to="#">JEAN PAUL GAULTIER</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .sidebar-container {
        width: 280px;
    }
    .sidebar-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 50px;
        background-color: #2d8356;
        width: 100%;
        justify-content: center;
    }
    .sidebar-title h5 {
        margin: 0;
        margin-left: 10px;
        font-size: 18px;
    }

    .sidebar-content {
        width: 280px;
        height: 395px;
        background-color: black;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
        color: white;
    }

    .sidebar-content a {
        float: left;
        color: #fdf8f8;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 15px;
    }

   
    .sidebar-content a:hover {
        background-color: #ddd;
        color: black;
    } 

    .sidebar-content::-webkit-scrollbar {
        width: 10px;
    }
    
    /* Track */
    .sidebar-content::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
        background-color: gray;
    }
    
    /* Handle */
    .sidebar-content::-webkit-scrollbar-thumb {
        background: #2d8356; 
        border-radius: 10px;
    }
    
    /* Handle on hover */
    .sidebar-content::-webkit-scrollbar-thumb:hover {
        background: rgb(84, 82, 82); 
    }

</style>