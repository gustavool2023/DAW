'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
    <button type="button"
        class="search-input-clear"
        aria-label="Clear search"
        data-search-input-clear>&times;</button>
</div>
` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="architecture.html" data-type="chapter-link">
                                        <span class="icon ion-ios-git-branch"></span>Architecture
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-2f0c5ac282e3ece02a4c7ac08717baf2d3830cbd01a862a2f7cbd271c69fe99c50614b5291467a05253c556b6c1dd190dec9d5bc1ba48109d16fa2294bf9c6c6"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-2f0c5ac282e3ece02a4c7ac08717baf2d3830cbd01a862a2f7cbd271c69fe99c50614b5291467a05253c556b6c1dd190dec9d5bc1ba48109d16fa2294bf9c6c6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2f0c5ac282e3ece02a4c7ac08717baf2d3830cbd01a862a2f7cbd271c69fe99c50614b5291467a05253c556b6c1dd190dec9d5bc1ba48109d16fa2294bf9c6c6"' :
                                            'id="xs-controllers-links-module-AuthModule-2f0c5ac282e3ece02a4c7ac08717baf2d3830cbd01a862a2f7cbd271c69fe99c50614b5291467a05253c556b6c1dd190dec9d5bc1ba48109d16fa2294bf9c6c6"' }>
                                            <li class="link">
                                                <a href="controllers/LoginController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-2f0c5ac282e3ece02a4c7ac08717baf2d3830cbd01a862a2f7cbd271c69fe99c50614b5291467a05253c556b6c1dd190dec9d5bc1ba48109d16fa2294bf9c6c6"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-2f0c5ac282e3ece02a4c7ac08717baf2d3830cbd01a862a2f7cbd271c69fe99c50614b5291467a05253c556b6c1dd190dec9d5bc1ba48109d16fa2294bf9c6c6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2f0c5ac282e3ece02a4c7ac08717baf2d3830cbd01a862a2f7cbd271c69fe99c50614b5291467a05253c556b6c1dd190dec9d5bc1ba48109d16fa2294bf9c6c6"' :
                                        'id="xs-injectables-links-module-AuthModule-2f0c5ac282e3ece02a4c7ac08717baf2d3830cbd01a862a2f7cbd271c69fe99c50614b5291467a05253c556b6c1dd190dec9d5bc1ba48109d16fa2294bf9c6c6"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsuariosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuariosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GestionModule.html" data-type="entity-link" >GestionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GestionModule-f7787a7179f799f7ef7dafcccf0b0ade159d32acee7cb91c772767fb95340cd254c7c83621740bb65b98c0b9bfa9bad99356b02c04290c258848b3af2558b369"' : 'data-bs-target="#xs-controllers-links-module-GestionModule-f7787a7179f799f7ef7dafcccf0b0ade159d32acee7cb91c772767fb95340cd254c7c83621740bb65b98c0b9bfa9bad99356b02c04290c258848b3af2558b369"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GestionModule-f7787a7179f799f7ef7dafcccf0b0ade159d32acee7cb91c772767fb95340cd254c7c83621740bb65b98c0b9bfa9bad99356b02c04290c258848b3af2558b369"' :
                                            'id="xs-controllers-links-module-GestionModule-f7787a7179f799f7ef7dafcccf0b0ade159d32acee7cb91c772767fb95340cd254c7c83621740bb65b98c0b9bfa9bad99356b02c04290c258848b3af2558b369"' }>
                                            <li class="link">
                                                <a href="controllers/ClientesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ProyectosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProyectosController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TareasController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TareasController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GestionModule-f7787a7179f799f7ef7dafcccf0b0ade159d32acee7cb91c772767fb95340cd254c7c83621740bb65b98c0b9bfa9bad99356b02c04290c258848b3af2558b369"' : 'data-bs-target="#xs-injectables-links-module-GestionModule-f7787a7179f799f7ef7dafcccf0b0ade159d32acee7cb91c772767fb95340cd254c7c83621740bb65b98c0b9bfa9bad99356b02c04290c258848b3af2558b369"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GestionModule-f7787a7179f799f7ef7dafcccf0b0ade159d32acee7cb91c772767fb95340cd254c7c83621740bb65b98c0b9bfa9bad99356b02c04290c258848b3af2558b369"' :
                                        'id="xs-injectables-links-module-GestionModule-f7787a7179f799f7ef7dafcccf0b0ade159d32acee7cb91c772767fb95340cd254c7c83621740bb65b98c0b9bfa9bad99356b02c04290c258848b3af2558b369"' }>
                                        <li class="link">
                                            <a href="injectables/ClientesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProyectosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProyectosService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TareasService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TareasService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/ClientesController.html" data-type="entity-link" >ClientesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LoginController.html" data-type="entity-link" >LoginController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProyectosController.html" data-type="entity-link" >ProyectosController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TareasController.html" data-type="entity-link" >TareasController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Cliente.html" data-type="entity-link" >Cliente</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Proyecto.html" data-type="entity-link" >Proyecto</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tarea.html" data-type="entity-link" >Tarea</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Usuario.html" data-type="entity-link" >Usuario</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateClienteDto.html" data-type="entity-link" >CreateClienteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProyectoDto.html" data-type="entity-link" >CreateProyectoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTareaDto.html" data-type="entity-link" >CreateTareaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListClienteDTO.html" data-type="entity-link" >ListClienteDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListProyectoDTO.html" data-type="entity-link" >ListProyectoDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListTareaDTO.html" data-type="entity-link" >ListTareaDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDTO.html" data-type="entity-link" >LoginDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProyectoDTO.html" data-type="entity-link" >ProyectoDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateClienteDto.html" data-type="entity-link" >UpdateClienteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProyectoDto.html" data-type="entity-link" >UpdateProyectoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTareaDto.html" data-type="entity-link" >UpdateTareaDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientesService.html" data-type="entity-link" >ClientesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProyectosService.html" data-type="entity-link" >ProyectosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TareasService.html" data-type="entity-link" >TareasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuariosService.html" data-type="entity-link" >UsuariosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
