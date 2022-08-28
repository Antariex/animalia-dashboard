import React from 'react';

function MainSection(){
    return (
        <React.Fragment>
            {/*<!-- Main Section -->*/}
            <main>
                <h1>Dashboard</h1>

<div class="date">
    <input type="date"/>
    </div>

    <div class="insights">
        <div class="sales">
           <span class="material-icons">
            analytics
            </span>
             <div class="middle">
                <div class="left">
                    <h3>Ventas</h3>
                    <h1>$25.824</h1>
                    </div>
                    <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div class="number">
                            <p>81%</p>
                        </div>
                    </div>
                </div>
                <small class="text-muted">Últimas 24 horas</small>
        </div>

        <div class="expenses">
           <span class="material-icons">
            bar_chart
            </span>
             <div class="middle">
                <div class="center">
                    <h3>Gastos</h3>
                    <h1>$14.160</h1>
                    </div>
                    <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div class="number">
                            <p>81%</p>
                        </div>
                    </div>
                </div>
                <small class="text-muted">Últimas 24 horas</small>
        </div>
    </div>

    <div class="incomes">
           <span class="material-icons">
            stacked_line_chart
            </span>
             <div class="middle">
                <div class="Right">
                    <h3>Ingresos</h3>
                    <h1>$10.864</h1>
                    </div>
                    <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div class="number">
                            <p>44%</p>
                        </div>
                    </div>
                </div>
                <small class="text-muted">Últimas 24 horas</small>
        </div>

            </main>
        </React.Fragment>
    )
}
export default MainSection;