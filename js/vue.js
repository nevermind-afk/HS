new Vue({
    el: '#employeeApp',
    data: {
        tableVisible: true,
        selectedDepartment: '',
        employees: [
            { id: 1, name: 'Иван Иванов', position: 'Менеджер', department: 'Продажи', salary: 60000 },
            { id: 2, name: 'Петр Петров', position: 'Разработчик', department: 'IT', salary: 80000 },
            { id: 3, name: 'Мария Смирнова', position: 'Аналитик', department: 'Маркетинг', salary: 70000 },
            { id: 4, name: 'Ольга Сидорова', position: 'Тестировщик', department: 'IT', salary: 75000 },
            { id: 5, name: 'Сергей Кузнецов', position: 'Дизайнер', department: 'Маркетинг', salary: 72000 },
            { id: 6, name: 'Анна Орлова', position: 'Администратор', department: 'Продажи', salary: 55000 }
        ]
    },
    computed: {
        departments() {
            return [...new Set(this.employees.map(emp => emp.department))];
        },
        filteredEmployees() {
            if (!this.selectedDepartment) return this.employees;
            return this.employees.filter(emp => emp.department === this.selectedDepartment);
        }
    },
    methods: {
        toggleTableVisibility() {
            this.tableVisible = !this.tableVisible;
        },
        filterByDepartment(department) {
            this.selectedDepartment = department;
        }
    }
});
