$(document).ready(function() {
    // Стили для таблицы
    $('#productsTable').css({
        'width': '100%',
        'border-collapse': 'collapse',
        'background-color': '#fff',
        'box-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'margin-bottom': '20px'
    });

    $('#productsTable th, #productsTable td').css({
        'padding': '10px',
        'text-align': 'center',
        'border': '1px solid #ddd'
    });

    $('#productsTable th').css({
        'background-color': '#f4f4f4',
        'font-weight': 'bold'
    });

    $('#productsTable tbody tr:nth-child(even)').css('background-color', '#f9f9f9');
    $('#productsTable tbody tr:nth-child(odd)').css('background-color', '#fff');

    // Стили для кнопок
    $('change-style-btn').css({
        'padding': '10px 15px',
        'font-size': '14px',
        'border': '1px solid #ccc',
        'background-color': '#fff',
        'color': '#333',
        'cursor': 'pointer',
        'border-radius': '4px',
        'transition': 'background-color 0.3s'
    });

    $('button:hover, select:hover').css('background-color', '#e0e0e0');
});
//ПЛАГИН DATATABLES
$(document).ready(function() {
    // Инициализация DataTables
    $('#productsTable').DataTable({
        language: {
            url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/ru.json"
        }
    });

    // Кнопка для показа/скрытия таблицы
    $('#toggle-table-btn').click(function() {
        $('#productsTable_wrapper').toggle();
    });
});
//ИЗМЕНЕНИЕ СТИЛЕЙ И DOM КОНТЕНТА
$('#change-style-btn').click(function() {
    $('#productsTable').css({
        'width': '100%',
        'border-collapse': 'collapse'
    });

    $('#productsTable th, #productsTable td').css({
        'padding': '10px',
        'text-align': 'center',
        'border': '1px solid #ddd'
    });

    $('#productsTable th').css({
        'text-align': 'center',
        'background-color': 'rgba(70, 130, 180, 0.8)',
        'color': 'white'
    });

    $('#productsTable td:first-child').css({
        'text-align': 'left'
    });

    $('#productsTable td:nth-child(2)').css({
        'text-align': 'center'
    });

    $('#productsTable td:nth-child(even)').css({
        'background-color': '#f0f0f0'
    });

    $('#productsTable td:nth-child(odd)').css({
        'background-color': '#ffffff'
    });
    $('.products-table h3').text('Измененная таблица товаров');
});
// СОБЫТИЕ НАВЕДЕНИЕ НА СТРОКУ
$('#productsTable tbody').on('mouseenter', 'tr', function () {
    $(this).stop(true, true).animate({
        backgroundColor: '#e0f7fa',
    }, 300);
}).on('mouseleave', 'tr', function () {
    $(this).stop(true, true).animate({
        backgroundColor: '#ffffff',
    }, 300);
});
// ФИЛЬТРАЦИЯ ПО КАТЕГОРИЯМ
$('#category-filter').change(function() {
    const selectedCategory = $(this).val();
    const table = $('#productsTable').DataTable();

    if (selectedCategory) {
        table.column(2).search(selectedCategory).draw();
    } else {
        table.column(2).search('').draw();
    }
});
