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
                    <a href="index.html" data-type="index-link">@open-sauced/api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
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
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiServicesModule.html" data-type="entity-link" >ApiServicesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ApiServicesModule-c00dfc515e67acb8d99a17dc994c7ee2059b36740f9a2334a54837495ff04c56810420c7533e68127eb167ec6ed2a3eab2c5b2981a538f827618da1b9de9a934"' : 'data-target="#xs-injectables-links-module-ApiServicesModule-c00dfc515e67acb8d99a17dc994c7ee2059b36740f9a2334a54837495ff04c56810420c7533e68127eb167ec6ed2a3eab2c5b2981a538f827618da1b9de9a934"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ApiServicesModule-c00dfc515e67acb8d99a17dc994c7ee2059b36740f9a2334a54837495ff04c56810420c7533e68127eb167ec6ed2a3eab2c5b2981a538f827618da1b9de9a934"' :
                                        'id="xs-injectables-links-module-ApiServicesModule-c00dfc515e67acb8d99a17dc994c7ee2059b36740f9a2334a54837495ff04c56810420c7533e68127eb167ec6ed2a3eab2c5b2981a538f827618da1b9de9a934"' }>
                                        <li class="link">
                                            <a href="injectables/PagerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-c334adc114a810ac66e29c4b81ebc2f026ce94c47b0ac03cec55488439df4653c1b8c339c6abc45a0edd180ab58723dbb6c6da52793884ccf31357a2c9de1b89"' : 'data-target="#xs-controllers-links-module-AuthModule-c334adc114a810ac66e29c4b81ebc2f026ce94c47b0ac03cec55488439df4653c1b8c339c6abc45a0edd180ab58723dbb6c6da52793884ccf31357a2c9de1b89"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c334adc114a810ac66e29c4b81ebc2f026ce94c47b0ac03cec55488439df4653c1b8c339c6abc45a0edd180ab58723dbb6c6da52793884ccf31357a2c9de1b89"' :
                                            'id="xs-controllers-links-module-AuthModule-c334adc114a810ac66e29c4b81ebc2f026ce94c47b0ac03cec55488439df4653c1b8c339c6abc45a0edd180ab58723dbb6c6da52793884ccf31357a2c9de1b89"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-c334adc114a810ac66e29c4b81ebc2f026ce94c47b0ac03cec55488439df4653c1b8c339c6abc45a0edd180ab58723dbb6c6da52793884ccf31357a2c9de1b89"' : 'data-target="#xs-injectables-links-module-AuthModule-c334adc114a810ac66e29c4b81ebc2f026ce94c47b0ac03cec55488439df4653c1b8c339c6abc45a0edd180ab58723dbb6c6da52793884ccf31357a2c9de1b89"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c334adc114a810ac66e29c4b81ebc2f026ce94c47b0ac03cec55488439df4653c1b8c339c6abc45a0edd180ab58723dbb6c6da52793884ccf31357a2c9de1b89"' :
                                        'id="xs-injectables-links-module-AuthModule-c334adc114a810ac66e29c4b81ebc2f026ce94c47b0ac03cec55488439df4653c1b8c339c6abc45a0edd180ab58723dbb6c6da52793884ccf31357a2c9de1b89"' }>
                                        <li class="link">
                                            <a href="injectables/SupabaseGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupabaseGuard</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SupabaseStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupabaseStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogSummaryModule.html" data-type="entity-link" >BlogSummaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BlogSummaryModule-8ea259b4144fdf742dc277832c2e439026e17956bd081540cd869034c2b697f6e75b48e212365edb861a80770409645fcc9d76b4b74044d2d6876d0c0325a334"' : 'data-target="#xs-controllers-links-module-BlogSummaryModule-8ea259b4144fdf742dc277832c2e439026e17956bd081540cd869034c2b697f6e75b48e212365edb861a80770409645fcc9d76b4b74044d2d6876d0c0325a334"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BlogSummaryModule-8ea259b4144fdf742dc277832c2e439026e17956bd081540cd869034c2b697f6e75b48e212365edb861a80770409645fcc9d76b4b74044d2d6876d0c0325a334"' :
                                            'id="xs-controllers-links-module-BlogSummaryModule-8ea259b4144fdf742dc277832c2e439026e17956bd081540cd869034c2b697f6e75b48e212365edb861a80770409645fcc9d76b4b74044d2d6876d0c0325a334"' }>
                                            <li class="link">
                                                <a href="controllers/BlogSummaryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogSummaryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BlogSummaryModule-8ea259b4144fdf742dc277832c2e439026e17956bd081540cd869034c2b697f6e75b48e212365edb861a80770409645fcc9d76b4b74044d2d6876d0c0325a334"' : 'data-target="#xs-injectables-links-module-BlogSummaryModule-8ea259b4144fdf742dc277832c2e439026e17956bd081540cd869034c2b697f6e75b48e212365edb861a80770409645fcc9d76b4b74044d2d6876d0c0325a334"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BlogSummaryModule-8ea259b4144fdf742dc277832c2e439026e17956bd081540cd869034c2b697f6e75b48e212365edb861a80770409645fcc9d76b4b74044d2d6876d0c0325a334"' :
                                        'id="xs-injectables-links-module-BlogSummaryModule-8ea259b4144fdf742dc277832c2e439026e17956bd081540cd869034c2b697f6e75b48e212365edb861a80770409645fcc9d76b4b74044d2d6876d0c0325a334"' }>
                                        <li class="link">
                                            <a href="injectables/BlogSummaryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogSummaryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContributionModule.html" data-type="entity-link" >ContributionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContributionModule-a2a7bb447e484eff76f38e430467c675c7c0627c555cc05a11a05abc1147830f89770b59f465da7043df4a0b70e937720a9f6725f5ec9515feb82f7fd57d5233"' : 'data-target="#xs-controllers-links-module-ContributionModule-a2a7bb447e484eff76f38e430467c675c7c0627c555cc05a11a05abc1147830f89770b59f465da7043df4a0b70e937720a9f6725f5ec9515feb82f7fd57d5233"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContributionModule-a2a7bb447e484eff76f38e430467c675c7c0627c555cc05a11a05abc1147830f89770b59f465da7043df4a0b70e937720a9f6725f5ec9515feb82f7fd57d5233"' :
                                            'id="xs-controllers-links-module-ContributionModule-a2a7bb447e484eff76f38e430467c675c7c0627c555cc05a11a05abc1147830f89770b59f465da7043df4a0b70e937720a9f6725f5ec9515feb82f7fd57d5233"' }>
                                            <li class="link">
                                                <a href="controllers/RepoContributionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepoContributionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContributionModule-a2a7bb447e484eff76f38e430467c675c7c0627c555cc05a11a05abc1147830f89770b59f465da7043df4a0b70e937720a9f6725f5ec9515feb82f7fd57d5233"' : 'data-target="#xs-injectables-links-module-ContributionModule-a2a7bb447e484eff76f38e430467c675c7c0627c555cc05a11a05abc1147830f89770b59f465da7043df4a0b70e937720a9f6725f5ec9515feb82f7fd57d5233"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContributionModule-a2a7bb447e484eff76f38e430467c675c7c0627c555cc05a11a05abc1147830f89770b59f465da7043df4a0b70e937720a9f6725f5ec9515feb82f7fd57d5233"' :
                                        'id="xs-injectables-links-module-ContributionModule-a2a7bb447e484eff76f38e430467c675c7c0627c555cc05a11a05abc1147830f89770b59f465da7043df4a0b70e937720a9f6725f5ec9515feb82f7fd57d5233"' }>
                                        <li class="link">
                                            <a href="injectables/ContributionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContributionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContributorModule.html" data-type="entity-link" >ContributorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContributorModule-b8d0121bcefb89b0d6db01e883c01b81f9880c4544b566014e089801e90a78832f0f1610d90ffed2ac3478dfbd79046871c61e5ec232abac9cf006aae511da84"' : 'data-target="#xs-controllers-links-module-ContributorModule-b8d0121bcefb89b0d6db01e883c01b81f9880c4544b566014e089801e90a78832f0f1610d90ffed2ac3478dfbd79046871c61e5ec232abac9cf006aae511da84"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContributorModule-b8d0121bcefb89b0d6db01e883c01b81f9880c4544b566014e089801e90a78832f0f1610d90ffed2ac3478dfbd79046871c61e5ec232abac9cf006aae511da84"' :
                                            'id="xs-controllers-links-module-ContributorModule-b8d0121bcefb89b0d6db01e883c01b81f9880c4544b566014e089801e90a78832f0f1610d90ffed2ac3478dfbd79046871c61e5ec232abac9cf006aae511da84"' }>
                                            <li class="link">
                                                <a href="controllers/ContributorController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContributorController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ContributorInsightsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContributorInsightsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomerModule.html" data-type="entity-link" >CustomerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CustomerModule-34fc60a04230fedc5f0fe0a09ab37b919e48dc3ca6f40dd2795a9f95e04ee6aec69c3e6b44596c1dafa4291f49e9f6403670bb553042a6c95f0c9b8a0ab27026"' : 'data-target="#xs-injectables-links-module-CustomerModule-34fc60a04230fedc5f0fe0a09ab37b919e48dc3ca6f40dd2795a9f95e04ee6aec69c3e6b44596c1dafa4291f49e9f6403670bb553042a6c95f0c9b8a0ab27026"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CustomerModule-34fc60a04230fedc5f0fe0a09ab37b919e48dc3ca6f40dd2795a9f95e04ee6aec69c3e6b44596c1dafa4291f49e9f6403670bb553042a6c95f0c9b8a0ab27026"' :
                                        'id="xs-injectables-links-module-CustomerModule-34fc60a04230fedc5f0fe0a09ab37b919e48dc3ca6f40dd2795a9f95e04ee6aec69c3e6b44596c1dafa4291f49e9f6403670bb553042a6c95f0c9b8a0ab27026"' }>
                                        <li class="link">
                                            <a href="injectables/CustomerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmojiModule.html" data-type="entity-link" >EmojiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EmojiModule-96f3536b06a81020da197807fe408c35aabe7078f33bf30dce665e5f32365b8ea7cf2da84546549d299ac8c55bccf3c66bf93aa5ba9b2fc2db4b0e44ffdf318f"' : 'data-target="#xs-controllers-links-module-EmojiModule-96f3536b06a81020da197807fe408c35aabe7078f33bf30dce665e5f32365b8ea7cf2da84546549d299ac8c55bccf3c66bf93aa5ba9b2fc2db4b0e44ffdf318f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EmojiModule-96f3536b06a81020da197807fe408c35aabe7078f33bf30dce665e5f32365b8ea7cf2da84546549d299ac8c55bccf3c66bf93aa5ba9b2fc2db4b0e44ffdf318f"' :
                                            'id="xs-controllers-links-module-EmojiModule-96f3536b06a81020da197807fe408c35aabe7078f33bf30dce665e5f32365b8ea7cf2da84546549d299ac8c55bccf3c66bf93aa5ba9b2fc2db4b0e44ffdf318f"' }>
                                            <li class="link">
                                                <a href="controllers/EmojiController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmojiController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EmojiModule-96f3536b06a81020da197807fe408c35aabe7078f33bf30dce665e5f32365b8ea7cf2da84546549d299ac8c55bccf3c66bf93aa5ba9b2fc2db4b0e44ffdf318f"' : 'data-target="#xs-injectables-links-module-EmojiModule-96f3536b06a81020da197807fe408c35aabe7078f33bf30dce665e5f32365b8ea7cf2da84546549d299ac8c55bccf3c66bf93aa5ba9b2fc2db4b0e44ffdf318f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmojiModule-96f3536b06a81020da197807fe408c35aabe7078f33bf30dce665e5f32365b8ea7cf2da84546549d299ac8c55bccf3c66bf93aa5ba9b2fc2db4b0e44ffdf318f"' :
                                        'id="xs-injectables-links-module-EmojiModule-96f3536b06a81020da197807fe408c35aabe7078f33bf30dce665e5f32365b8ea7cf2da84546549d299ac8c55bccf3c66bf93aa5ba9b2fc2db4b0e44ffdf318f"' }>
                                        <li class="link">
                                            <a href="injectables/EmojiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmojiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EndorsementModule.html" data-type="entity-link" >EndorsementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EndorsementModule-666fe0a0efa5fbf1f8dccd78e9cdba3512c484e800dafa017d82fc24288aaf2eaa754fcb31fe5e0375a692b5e0c366cfccc66f804a11070bb1725dff1b5f4429"' : 'data-target="#xs-controllers-links-module-EndorsementModule-666fe0a0efa5fbf1f8dccd78e9cdba3512c484e800dafa017d82fc24288aaf2eaa754fcb31fe5e0375a692b5e0c366cfccc66f804a11070bb1725dff1b5f4429"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EndorsementModule-666fe0a0efa5fbf1f8dccd78e9cdba3512c484e800dafa017d82fc24288aaf2eaa754fcb31fe5e0375a692b5e0c366cfccc66f804a11070bb1725dff1b5f4429"' :
                                            'id="xs-controllers-links-module-EndorsementModule-666fe0a0efa5fbf1f8dccd78e9cdba3512c484e800dafa017d82fc24288aaf2eaa754fcb31fe5e0375a692b5e0c366cfccc66f804a11070bb1725dff1b5f4429"' }>
                                            <li class="link">
                                                <a href="controllers/EndorsementController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EndorsementController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EndorsementModule-666fe0a0efa5fbf1f8dccd78e9cdba3512c484e800dafa017d82fc24288aaf2eaa754fcb31fe5e0375a692b5e0c366cfccc66f804a11070bb1725dff1b5f4429"' : 'data-target="#xs-injectables-links-module-EndorsementModule-666fe0a0efa5fbf1f8dccd78e9cdba3512c484e800dafa017d82fc24288aaf2eaa754fcb31fe5e0375a692b5e0c366cfccc66f804a11070bb1725dff1b5f4429"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EndorsementModule-666fe0a0efa5fbf1f8dccd78e9cdba3512c484e800dafa017d82fc24288aaf2eaa754fcb31fe5e0375a692b5e0c366cfccc66f804a11070bb1725dff1b5f4429"' :
                                        'id="xs-injectables-links-module-EndorsementModule-666fe0a0efa5fbf1f8dccd78e9cdba3512c484e800dafa017d82fc24288aaf2eaa754fcb31fe5e0375a692b5e0c366cfccc66f804a11070bb1725dff1b5f4429"' }>
                                        <li class="link">
                                            <a href="injectables/EndorsementService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EndorsementService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-4b73503c69517ba43047a9d63e39bb6a5e944bcce5b8c68be3994aa1abb0bb078c90f82c671a5c155cc031f1a010ff51450da078e646904377016677e4d35f74"' : 'data-target="#xs-controllers-links-module-HealthModule-4b73503c69517ba43047a9d63e39bb6a5e944bcce5b8c68be3994aa1abb0bb078c90f82c671a5c155cc031f1a010ff51450da078e646904377016677e4d35f74"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-4b73503c69517ba43047a9d63e39bb6a5e944bcce5b8c68be3994aa1abb0bb078c90f82c671a5c155cc031f1a010ff51450da078e646904377016677e4d35f74"' :
                                            'id="xs-controllers-links-module-HealthModule-4b73503c69517ba43047a9d63e39bb6a5e944bcce5b8c68be3994aa1abb0bb078c90f82c671a5c155cc031f1a010ff51450da078e646904377016677e4d35f74"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HighlightModule.html" data-type="entity-link" >HighlightModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HighlightModule-6e516543943c88fbbc2e5ec080cca83e37a9aa7bc93cd5a317b2ccc7c9b94648e808a2a261c16e1e95b270c7de18dbc5284be982377cb64015cf76874206a2ff"' : 'data-target="#xs-controllers-links-module-HighlightModule-6e516543943c88fbbc2e5ec080cca83e37a9aa7bc93cd5a317b2ccc7c9b94648e808a2a261c16e1e95b270c7de18dbc5284be982377cb64015cf76874206a2ff"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HighlightModule-6e516543943c88fbbc2e5ec080cca83e37a9aa7bc93cd5a317b2ccc7c9b94648e808a2a261c16e1e95b270c7de18dbc5284be982377cb64015cf76874206a2ff"' :
                                            'id="xs-controllers-links-module-HighlightModule-6e516543943c88fbbc2e5ec080cca83e37a9aa7bc93cd5a317b2ccc7c9b94648e808a2a261c16e1e95b270c7de18dbc5284be982377cb64015cf76874206a2ff"' }>
                                            <li class="link">
                                                <a href="controllers/HighlightController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HighlightController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InsightsModule.html" data-type="entity-link" >InsightsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-InsightsModule-aa79502af984e5d4b0a84d8496575b7cfc877c65dd653b005ae36f218e480c1a3e027684eb7a600c5e9e2ca5c51b4244f2540fbc50b3ed39838e14e54f3aad6c"' : 'data-target="#xs-controllers-links-module-InsightsModule-aa79502af984e5d4b0a84d8496575b7cfc877c65dd653b005ae36f218e480c1a3e027684eb7a600c5e9e2ca5c51b4244f2540fbc50b3ed39838e14e54f3aad6c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InsightsModule-aa79502af984e5d4b0a84d8496575b7cfc877c65dd653b005ae36f218e480c1a3e027684eb7a600c5e9e2ca5c51b4244f2540fbc50b3ed39838e14e54f3aad6c"' :
                                            'id="xs-controllers-links-module-InsightsModule-aa79502af984e5d4b0a84d8496575b7cfc877c65dd653b005ae36f218e480c1a3e027684eb7a600c5e9e2ca5c51b4244f2540fbc50b3ed39838e14e54f3aad6c"' }>
                                            <li class="link">
                                                <a href="controllers/InsightController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InsightController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserInsightMemberController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserInsightMemberController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserInsightsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserInsightsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-InsightsModule-aa79502af984e5d4b0a84d8496575b7cfc877c65dd653b005ae36f218e480c1a3e027684eb7a600c5e9e2ca5c51b4244f2540fbc50b3ed39838e14e54f3aad6c"' : 'data-target="#xs-injectables-links-module-InsightsModule-aa79502af984e5d4b0a84d8496575b7cfc877c65dd653b005ae36f218e480c1a3e027684eb7a600c5e9e2ca5c51b4244f2540fbc50b3ed39838e14e54f3aad6c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InsightsModule-aa79502af984e5d4b0a84d8496575b7cfc877c65dd653b005ae36f218e480c1a3e027684eb7a600c5e9e2ca5c51b4244f2540fbc50b3ed39838e14e54f3aad6c"' :
                                        'id="xs-injectables-links-module-InsightsModule-aa79502af984e5d4b0a84d8496575b7cfc877c65dd653b005ae36f218e480c1a3e027684eb7a600c5e9e2ca5c51b4244f2540fbc50b3ed39838e14e54f3aad6c"' }>
                                        <li class="link">
                                            <a href="injectables/InsightMemberService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InsightMemberService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InsightRepoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InsightRepoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InsightsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InsightsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/IssueSummaryModule.html" data-type="entity-link" >IssueSummaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-IssueSummaryModule-153b35589d181799ffab58d3f730f946c72e87d4956b7abe8e40b5b7fec0426d9f6f0d5bf86aec8b677a691f3aab448ba6d7e215351fe5b6cf6cd3d30595744c"' : 'data-target="#xs-controllers-links-module-IssueSummaryModule-153b35589d181799ffab58d3f730f946c72e87d4956b7abe8e40b5b7fec0426d9f6f0d5bf86aec8b677a691f3aab448ba6d7e215351fe5b6cf6cd3d30595744c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-IssueSummaryModule-153b35589d181799ffab58d3f730f946c72e87d4956b7abe8e40b5b7fec0426d9f6f0d5bf86aec8b677a691f3aab448ba6d7e215351fe5b6cf6cd3d30595744c"' :
                                            'id="xs-controllers-links-module-IssueSummaryModule-153b35589d181799ffab58d3f730f946c72e87d4956b7abe8e40b5b7fec0426d9f6f0d5bf86aec8b677a691f3aab448ba6d7e215351fe5b6cf6cd3d30595744c"' }>
                                            <li class="link">
                                                <a href="controllers/IssueSummaryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IssueSummaryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-IssueSummaryModule-153b35589d181799ffab58d3f730f946c72e87d4956b7abe8e40b5b7fec0426d9f6f0d5bf86aec8b677a691f3aab448ba6d7e215351fe5b6cf6cd3d30595744c"' : 'data-target="#xs-injectables-links-module-IssueSummaryModule-153b35589d181799ffab58d3f730f946c72e87d4956b7abe8e40b5b7fec0426d9f6f0d5bf86aec8b677a691f3aab448ba6d7e215351fe5b6cf6cd3d30595744c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IssueSummaryModule-153b35589d181799ffab58d3f730f946c72e87d4956b7abe8e40b5b7fec0426d9f6f0d5bf86aec8b677a691f3aab448ba6d7e215351fe5b6cf6cd3d30595744c"' :
                                        'id="xs-injectables-links-module-IssueSummaryModule-153b35589d181799ffab58d3f730f946c72e87d4956b7abe8e40b5b7fec0426d9f6f0d5bf86aec8b677a691f3aab448ba6d7e215351fe5b6cf6cd3d30595744c"' }>
                                        <li class="link">
                                            <a href="injectables/IssueSummaryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IssueSummaryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogModule.html" data-type="entity-link" >LogModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LogModule-65597c83d278ad1e756037ecce79da291d02196021312fa0ddb28e66297773efddc0378f1df884960157d5d382c61d8dd9079e2274db455a9190791a825c2d6e"' : 'data-target="#xs-injectables-links-module-LogModule-65597c83d278ad1e756037ecce79da291d02196021312fa0ddb28e66297773efddc0378f1df884960157d5d382c61d8dd9079e2274db455a9190791a825c2d6e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LogModule-65597c83d278ad1e756037ecce79da291d02196021312fa0ddb28e66297773efddc0378f1df884960157d5d382c61d8dd9079e2274db455a9190791a825c2d6e"' :
                                        'id="xs-injectables-links-module-LogModule-65597c83d278ad1e756037ecce79da291d02196021312fa0ddb28e66297773efddc0378f1df884960157d5d382c61d8dd9079e2274db455a9190791a825c2d6e"' }>
                                        <li class="link">
                                            <a href="injectables/CustomLogger.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomLogger</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OpenAiModule.html" data-type="entity-link" >OpenAiModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OpenAiModule-a2a9010e78263e2cd5e3d5f3ca1e7630561b3705dd03ecde2f148b57701033807c5c1729336783041e277857b28587e58f490d6712696fdc5ec5e1e31ab5ca54"' : 'data-target="#xs-injectables-links-module-OpenAiModule-a2a9010e78263e2cd5e3d5f3ca1e7630561b3705dd03ecde2f148b57701033807c5c1729336783041e277857b28587e58f490d6712696fdc5ec5e1e31ab5ca54"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OpenAiModule-a2a9010e78263e2cd5e3d5f3ca1e7630561b3705dd03ecde2f148b57701033807c5c1729336783041e277857b28587e58f490d6712696fdc5ec5e1e31ab5ca54"' :
                                        'id="xs-injectables-links-module-OpenAiModule-a2a9010e78263e2cd5e3d5f3ca1e7630561b3705dd03ecde2f148b57701033807c5c1729336783041e277857b28587e58f490d6712696fdc5ec5e1e31ab5ca54"' }>
                                        <li class="link">
                                            <a href="injectables/OpenAiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OpenAiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PizzaOvenModule.html" data-type="entity-link" >PizzaOvenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PizzaOvenModule-bc86828e6dd2c004eebf8b74bb5ea778c125f07ca67027e3d576ecc10be5544cf8458e55d43eefde3526c72e85edebec107b86c9edddc33a2285abb17bb2780c"' : 'data-target="#xs-controllers-links-module-PizzaOvenModule-bc86828e6dd2c004eebf8b74bb5ea778c125f07ca67027e3d576ecc10be5544cf8458e55d43eefde3526c72e85edebec107b86c9edddc33a2285abb17bb2780c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PizzaOvenModule-bc86828e6dd2c004eebf8b74bb5ea778c125f07ca67027e3d576ecc10be5544cf8458e55d43eefde3526c72e85edebec107b86c9edddc33a2285abb17bb2780c"' :
                                            'id="xs-controllers-links-module-PizzaOvenModule-bc86828e6dd2c004eebf8b74bb5ea778c125f07ca67027e3d576ecc10be5544cf8458e55d43eefde3526c72e85edebec107b86c9edddc33a2285abb17bb2780c"' }>
                                            <li class="link">
                                                <a href="controllers/PizzaOvenController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PizzaOvenController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PizzaOvenModule-bc86828e6dd2c004eebf8b74bb5ea778c125f07ca67027e3d576ecc10be5544cf8458e55d43eefde3526c72e85edebec107b86c9edddc33a2285abb17bb2780c"' : 'data-target="#xs-injectables-links-module-PizzaOvenModule-bc86828e6dd2c004eebf8b74bb5ea778c125f07ca67027e3d576ecc10be5544cf8458e55d43eefde3526c72e85edebec107b86c9edddc33a2285abb17bb2780c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PizzaOvenModule-bc86828e6dd2c004eebf8b74bb5ea778c125f07ca67027e3d576ecc10be5544cf8458e55d43eefde3526c72e85edebec107b86c9edddc33a2285abb17bb2780c"' :
                                        'id="xs-injectables-links-module-PizzaOvenModule-bc86828e6dd2c004eebf8b74bb5ea778c125f07ca67027e3d576ecc10be5544cf8458e55d43eefde3526c72e85edebec107b86c9edddc33a2285abb17bb2780c"' }>
                                        <li class="link">
                                            <a href="injectables/CommitAuthorsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommitAuthorsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CommitsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommitsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PizzaOvenService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PizzaOvenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PullRequestModule.html" data-type="entity-link" >PullRequestModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PullRequestModule-1b2378095e8bff9e4066b07fe667ee3a8331d2729198426ba5bb1002439661065739a67e410d1eb247c897f0df8ac788a93fb481be9231f7446adbf34e014f4b"' : 'data-target="#xs-controllers-links-module-PullRequestModule-1b2378095e8bff9e4066b07fe667ee3a8331d2729198426ba5bb1002439661065739a67e410d1eb247c897f0df8ac788a93fb481be9231f7446adbf34e014f4b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PullRequestModule-1b2378095e8bff9e4066b07fe667ee3a8331d2729198426ba5bb1002439661065739a67e410d1eb247c897f0df8ac788a93fb481be9231f7446adbf34e014f4b"' :
                                            'id="xs-controllers-links-module-PullRequestModule-1b2378095e8bff9e4066b07fe667ee3a8331d2729198426ba5bb1002439661065739a67e410d1eb247c897f0df8ac788a93fb481be9231f7446adbf34e014f4b"' }>
                                            <li class="link">
                                                <a href="controllers/CodeExplanationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CodeExplanationController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/CodeRefactorSuggestionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CodeRefactorSuggestionController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/CodeTestSuggestionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CodeTestSuggestionController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PullRequestController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PullRequestController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PullRequestDescriptionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PullRequestDescriptionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PullRequestModule-1b2378095e8bff9e4066b07fe667ee3a8331d2729198426ba5bb1002439661065739a67e410d1eb247c897f0df8ac788a93fb481be9231f7446adbf34e014f4b"' : 'data-target="#xs-injectables-links-module-PullRequestModule-1b2378095e8bff9e4066b07fe667ee3a8331d2729198426ba5bb1002439661065739a67e410d1eb247c897f0df8ac788a93fb481be9231f7446adbf34e014f4b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PullRequestModule-1b2378095e8bff9e4066b07fe667ee3a8331d2729198426ba5bb1002439661065739a67e410d1eb247c897f0df8ac788a93fb481be9231f7446adbf34e014f4b"' :
                                        'id="xs-injectables-links-module-PullRequestModule-1b2378095e8bff9e4066b07fe667ee3a8331d2729198426ba5bb1002439661065739a67e410d1eb247c897f0df8ac788a93fb481be9231f7446adbf34e014f4b"' }>
                                        <li class="link">
                                            <a href="injectables/CodeExplanationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CodeExplanationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CodeRefactorSuggestionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CodeRefactorSuggestionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CodeTestSuggestionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CodeTestSuggestionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PullRequestDescriptionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PullRequestDescriptionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PullRequestInsightsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PullRequestInsightsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PullRequestService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PullRequestService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepoFilterModule.html" data-type="entity-link" >RepoFilterModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RepoFilterModule-97bee53a3faf57aa7c3be1837ca4e562914c8bd650d6620c7eec5cb8b213d388c11d868f05bf85feac6f6a43cf32c30fb95bccc89f1e1d1672acc73bb5161eba"' : 'data-target="#xs-injectables-links-module-RepoFilterModule-97bee53a3faf57aa7c3be1837ca4e562914c8bd650d6620c7eec5cb8b213d388c11d868f05bf85feac6f6a43cf32c30fb95bccc89f1e1d1672acc73bb5161eba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RepoFilterModule-97bee53a3faf57aa7c3be1837ca4e562914c8bd650d6620c7eec5cb8b213d388c11d868f05bf85feac6f6a43cf32c30fb95bccc89f1e1d1672acc73bb5161eba"' :
                                        'id="xs-injectables-links-module-RepoFilterModule-97bee53a3faf57aa7c3be1837ca4e562914c8bd650d6620c7eec5cb8b213d388c11d868f05bf85feac6f6a43cf32c30fb95bccc89f1e1d1672acc73bb5161eba"' }>
                                        <li class="link">
                                            <a href="injectables/RepoFilterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepoFilterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepoModule.html" data-type="entity-link" >RepoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RepoModule-f0bbb7ae0f0de2fb1eba02f6dd893663ce1f23c8df4b69ee58358b159fdf89f8d8f6ddc14bb105e234e720a4fac6ee932f07fd50ef6b0de1bd0f24085229a8fd"' : 'data-target="#xs-controllers-links-module-RepoModule-f0bbb7ae0f0de2fb1eba02f6dd893663ce1f23c8df4b69ee58358b159fdf89f8d8f6ddc14bb105e234e720a4fac6ee932f07fd50ef6b0de1bd0f24085229a8fd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RepoModule-f0bbb7ae0f0de2fb1eba02f6dd893663ce1f23c8df4b69ee58358b159fdf89f8d8f6ddc14bb105e234e720a4fac6ee932f07fd50ef6b0de1bd0f24085229a8fd"' :
                                            'id="xs-controllers-links-module-RepoModule-f0bbb7ae0f0de2fb1eba02f6dd893663ce1f23c8df4b69ee58358b159fdf89f8d8f6ddc14bb105e234e720a4fac6ee932f07fd50ef6b0de1bd0f24085229a8fd"' }>
                                            <li class="link">
                                                <a href="controllers/RepoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RepoModule-f0bbb7ae0f0de2fb1eba02f6dd893663ce1f23c8df4b69ee58358b159fdf89f8d8f6ddc14bb105e234e720a4fac6ee932f07fd50ef6b0de1bd0f24085229a8fd"' : 'data-target="#xs-injectables-links-module-RepoModule-f0bbb7ae0f0de2fb1eba02f6dd893663ce1f23c8df4b69ee58358b159fdf89f8d8f6ddc14bb105e234e720a4fac6ee932f07fd50ef6b0de1bd0f24085229a8fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RepoModule-f0bbb7ae0f0de2fb1eba02f6dd893663ce1f23c8df4b69ee58358b159fdf89f8d8f6ddc14bb105e234e720a4fac6ee932f07fd50ef6b0de1bd0f24085229a8fd"' :
                                        'id="xs-injectables-links-module-RepoModule-f0bbb7ae0f0de2fb1eba02f6dd893663ce1f23c8df4b69ee58358b159fdf89f8d8f6ddc14bb105e234e720a4fac6ee932f07fd50ef6b0de1bd0f24085229a8fd"' }>
                                        <li class="link">
                                            <a href="injectables/RepoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StargazeModule.html" data-type="entity-link" >StargazeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StargazeModule-efeecd562ffbc32491b8f9ebdf91049601d65cf2d67ec8a6e53abae232cceb2c9ba2548c1d35019a31ef7980df1e8abf524c4666974456f42f385564569c7169"' : 'data-target="#xs-controllers-links-module-StargazeModule-efeecd562ffbc32491b8f9ebdf91049601d65cf2d67ec8a6e53abae232cceb2c9ba2548c1d35019a31ef7980df1e8abf524c4666974456f42f385564569c7169"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StargazeModule-efeecd562ffbc32491b8f9ebdf91049601d65cf2d67ec8a6e53abae232cceb2c9ba2548c1d35019a31ef7980df1e8abf524c4666974456f42f385564569c7169"' :
                                            'id="xs-controllers-links-module-StargazeModule-efeecd562ffbc32491b8f9ebdf91049601d65cf2d67ec8a6e53abae232cceb2c9ba2548c1d35019a31ef7980df1e8abf524c4666974456f42f385564569c7169"' }>
                                            <li class="link">
                                                <a href="controllers/RepoStargazeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepoStargazeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StargazeModule-efeecd562ffbc32491b8f9ebdf91049601d65cf2d67ec8a6e53abae232cceb2c9ba2548c1d35019a31ef7980df1e8abf524c4666974456f42f385564569c7169"' : 'data-target="#xs-injectables-links-module-StargazeModule-efeecd562ffbc32491b8f9ebdf91049601d65cf2d67ec8a6e53abae232cceb2c9ba2548c1d35019a31ef7980df1e8abf524c4666974456f42f385564569c7169"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StargazeModule-efeecd562ffbc32491b8f9ebdf91049601d65cf2d67ec8a6e53abae232cceb2c9ba2548c1d35019a31ef7980df1e8abf524c4666974456f42f385564569c7169"' :
                                        'id="xs-injectables-links-module-StargazeModule-efeecd562ffbc32491b8f9ebdf91049601d65cf2d67ec8a6e53abae232cceb2c9ba2548c1d35019a31ef7980df1e8abf524c4666974456f42f385564569c7169"' }>
                                        <li class="link">
                                            <a href="injectables/StargazeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StargazeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StarModule.html" data-type="entity-link" >StarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StarModule-14ff7277daeb8b7d508df23cf912bdf6fc81d5b3b52c2825dd4080b4744b0e7809e642943d8c3fd30e7765baded339db27e1e557f5539e30c03213feb72096c9"' : 'data-target="#xs-controllers-links-module-StarModule-14ff7277daeb8b7d508df23cf912bdf6fc81d5b3b52c2825dd4080b4744b0e7809e642943d8c3fd30e7765baded339db27e1e557f5539e30c03213feb72096c9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StarModule-14ff7277daeb8b7d508df23cf912bdf6fc81d5b3b52c2825dd4080b4744b0e7809e642943d8c3fd30e7765baded339db27e1e557f5539e30c03213feb72096c9"' :
                                            'id="xs-controllers-links-module-StarModule-14ff7277daeb8b7d508df23cf912bdf6fc81d5b3b52c2825dd4080b4744b0e7809e642943d8c3fd30e7765baded339db27e1e557f5539e30c03213feb72096c9"' }>
                                            <li class="link">
                                                <a href="controllers/RepoStarController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepoStarController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StarModule-14ff7277daeb8b7d508df23cf912bdf6fc81d5b3b52c2825dd4080b4744b0e7809e642943d8c3fd30e7765baded339db27e1e557f5539e30c03213feb72096c9"' : 'data-target="#xs-injectables-links-module-StarModule-14ff7277daeb8b7d508df23cf912bdf6fc81d5b3b52c2825dd4080b4744b0e7809e642943d8c3fd30e7765baded339db27e1e557f5539e30c03213feb72096c9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StarModule-14ff7277daeb8b7d508df23cf912bdf6fc81d5b3b52c2825dd4080b4744b0e7809e642943d8c3fd30e7765baded339db27e1e557f5539e30c03213feb72096c9"' :
                                        'id="xs-injectables-links-module-StarModule-14ff7277daeb8b7d508df23cf912bdf6fc81d5b3b52c2825dd4080b4744b0e7809e642943d8c3fd30e7765baded339db27e1e557f5539e30c03213feb72096c9"' }>
                                        <li class="link">
                                            <a href="injectables/StarService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StarService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StripeModule.html" data-type="entity-link" >StripeModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StripeModule-150466fad28d08c74a0e6513c8911afdd3b508dd3e526d3acb0709e3676cf02b9b1eb916d29b9fa498b5d7ce914c5fac1aa11e0c0ec2de0f71fb9fe399504e2a"' : 'data-target="#xs-injectables-links-module-StripeModule-150466fad28d08c74a0e6513c8911afdd3b508dd3e526d3acb0709e3676cf02b9b1eb916d29b9fa498b5d7ce914c5fac1aa11e0c0ec2de0f71fb9fe399504e2a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StripeModule-150466fad28d08c74a0e6513c8911afdd3b508dd3e526d3acb0709e3676cf02b9b1eb916d29b9fa498b5d7ce914c5fac1aa11e0c0ec2de0f71fb9fe399504e2a"' :
                                        'id="xs-injectables-links-module-StripeModule-150466fad28d08c74a0e6513c8911afdd3b508dd3e526d3acb0709e3676cf02b9b1eb916d29b9fa498b5d7ce914c5fac1aa11e0c0ec2de0f71fb9fe399504e2a"' }>
                                        <li class="link">
                                            <a href="injectables/StripeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StripeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StripeSubscriptionModule.html" data-type="entity-link" >StripeSubscriptionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StripeSubscriptionModule-cfcaad2091c84661c4d1ff7fc8822ae28c38109a6d8494055c24b994b3242ce6064e2cdd7dfe6afbf468c83a590c964c6a8c7ee671017397e04920e1531db167"' : 'data-target="#xs-injectables-links-module-StripeSubscriptionModule-cfcaad2091c84661c4d1ff7fc8822ae28c38109a6d8494055c24b994b3242ce6064e2cdd7dfe6afbf468c83a590c964c6a8c7ee671017397e04920e1531db167"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StripeSubscriptionModule-cfcaad2091c84661c4d1ff7fc8822ae28c38109a6d8494055c24b994b3242ce6064e2cdd7dfe6afbf468c83a590c964c6a8c7ee671017397e04920e1531db167"' :
                                        'id="xs-injectables-links-module-StripeSubscriptionModule-cfcaad2091c84661c4d1ff7fc8822ae28c38109a6d8494055c24b994b3242ce6064e2cdd7dfe6afbf468c83a590c964c6a8c7ee671017397e04920e1531db167"' }>
                                        <li class="link">
                                            <a href="injectables/StripeSubscriptionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StripeSubscriptionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StripeWebHookModule.html" data-type="entity-link" >StripeWebHookModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StripeWebHookModule-5bb159222cfbb158da5c25db2b9a1b1712a6ceb942e8d9725559b73bb5ceffbd8a1664bc45439a9677824ab3176ebab5635edcdaf4ecc5b1169d8decdd679bcd"' : 'data-target="#xs-controllers-links-module-StripeWebHookModule-5bb159222cfbb158da5c25db2b9a1b1712a6ceb942e8d9725559b73bb5ceffbd8a1664bc45439a9677824ab3176ebab5635edcdaf4ecc5b1169d8decdd679bcd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StripeWebHookModule-5bb159222cfbb158da5c25db2b9a1b1712a6ceb942e8d9725559b73bb5ceffbd8a1664bc45439a9677824ab3176ebab5635edcdaf4ecc5b1169d8decdd679bcd"' :
                                            'id="xs-controllers-links-module-StripeWebHookModule-5bb159222cfbb158da5c25db2b9a1b1712a6ceb942e8d9725559b73bb5ceffbd8a1664bc45439a9677824ab3176ebab5635edcdaf4ecc5b1169d8decdd679bcd"' }>
                                            <li class="link">
                                                <a href="controllers/StripeWebhookController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StripeWebhookController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubmitModule.html" data-type="entity-link" >SubmitModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SubmitModule-bebb2852a857d0e7da5a5864a561827f9a70e03041c742fafcf6224590863e43bfa87cf29a674e840e4ecbc29c925736bc21d3bc58c95aba2a5670b5d16dddd2"' : 'data-target="#xs-controllers-links-module-SubmitModule-bebb2852a857d0e7da5a5864a561827f9a70e03041c742fafcf6224590863e43bfa87cf29a674e840e4ecbc29c925736bc21d3bc58c95aba2a5670b5d16dddd2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubmitModule-bebb2852a857d0e7da5a5864a561827f9a70e03041c742fafcf6224590863e43bfa87cf29a674e840e4ecbc29c925736bc21d3bc58c95aba2a5670b5d16dddd2"' :
                                            'id="xs-controllers-links-module-SubmitModule-bebb2852a857d0e7da5a5864a561827f9a70e03041c742fafcf6224590863e43bfa87cf29a674e840e4ecbc29c925736bc21d3bc58c95aba2a5670b5d16dddd2"' }>
                                            <li class="link">
                                                <a href="controllers/RepoSubmitController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepoSubmitController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SubmitModule-bebb2852a857d0e7da5a5864a561827f9a70e03041c742fafcf6224590863e43bfa87cf29a674e840e4ecbc29c925736bc21d3bc58c95aba2a5670b5d16dddd2"' : 'data-target="#xs-injectables-links-module-SubmitModule-bebb2852a857d0e7da5a5864a561827f9a70e03041c742fafcf6224590863e43bfa87cf29a674e840e4ecbc29c925736bc21d3bc58c95aba2a5670b5d16dddd2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubmitModule-bebb2852a857d0e7da5a5864a561827f9a70e03041c742fafcf6224590863e43bfa87cf29a674e840e4ecbc29c925736bc21d3bc58c95aba2a5670b5d16dddd2"' :
                                        'id="xs-injectables-links-module-SubmitModule-bebb2852a857d0e7da5a5864a561827f9a70e03041c742fafcf6224590863e43bfa87cf29a674e840e4ecbc29c925736bc21d3bc58c95aba2a5670b5d16dddd2"' }>
                                        <li class="link">
                                            <a href="injectables/SubmitService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubmitService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserListModule.html" data-type="entity-link" >UserListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserListModule-56352d3a65bd33c0fa21ed5ea37d06fa7f6495c76c4e6739deb5f6b9320d887f00a05758e6d2c9e48be6685a5b78b5a1eaea65232da0df961fb3d77a979b0983"' : 'data-target="#xs-controllers-links-module-UserListModule-56352d3a65bd33c0fa21ed5ea37d06fa7f6495c76c4e6739deb5f6b9320d887f00a05758e6d2c9e48be6685a5b78b5a1eaea65232da0df961fb3d77a979b0983"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserListModule-56352d3a65bd33c0fa21ed5ea37d06fa7f6495c76c4e6739deb5f6b9320d887f00a05758e6d2c9e48be6685a5b78b5a1eaea65232da0df961fb3d77a979b0983"' :
                                            'id="xs-controllers-links-module-UserListModule-56352d3a65bd33c0fa21ed5ea37d06fa7f6495c76c4e6739deb5f6b9320d887f00a05758e6d2c9e48be6685a5b78b5a1eaea65232da0df961fb3d77a979b0983"' }>
                                            <li class="link">
                                                <a href="controllers/UserListController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserListController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserListStatsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserListStatsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserListModule-56352d3a65bd33c0fa21ed5ea37d06fa7f6495c76c4e6739deb5f6b9320d887f00a05758e6d2c9e48be6685a5b78b5a1eaea65232da0df961fb3d77a979b0983"' : 'data-target="#xs-injectables-links-module-UserListModule-56352d3a65bd33c0fa21ed5ea37d06fa7f6495c76c4e6739deb5f6b9320d887f00a05758e6d2c9e48be6685a5b78b5a1eaea65232da0df961fb3d77a979b0983"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserListModule-56352d3a65bd33c0fa21ed5ea37d06fa7f6495c76c4e6739deb5f6b9320d887f00a05758e6d2c9e48be6685a5b78b5a1eaea65232da0df961fb3d77a979b0983"' :
                                        'id="xs-injectables-links-module-UserListModule-56352d3a65bd33c0fa21ed5ea37d06fa7f6495c76c4e6739deb5f6b9320d887f00a05758e6d2c9e48be6685a5b78b5a1eaea65232da0df961fb3d77a979b0983"' }>
                                        <li class="link">
                                            <a href="injectables/UserListService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserListService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserListStatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserListStatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-b98d31be92be60ce731f15e639224a7125b932d6b7cd09501705f37a1d3363b83bb237a0e0385352a6f9086165a8f81445841631841127eb499ced8e7b93aaca"' : 'data-target="#xs-controllers-links-module-UserModule-b98d31be92be60ce731f15e639224a7125b932d6b7cd09501705f37a1d3363b83bb237a0e0385352a6f9086165a8f81445841631841127eb499ced8e7b93aaca"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-b98d31be92be60ce731f15e639224a7125b932d6b7cd09501705f37a1d3363b83bb237a0e0385352a6f9086165a8f81445841631841127eb499ced8e7b93aaca"' :
                                            'id="xs-controllers-links-module-UserModule-b98d31be92be60ce731f15e639224a7125b932d6b7cd09501705f37a1d3363b83bb237a0e0385352a6f9086165a8f81445841631841127eb499ced8e7b93aaca"' }>
                                            <li class="link">
                                                <a href="controllers/UserCollaborationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserCollaborationController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserEndorsementController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserEndorsementController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserFollowsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserFollowsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserHighlightsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserHighlightsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserNotificationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserNotificationController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserRecommendationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRecommendationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-b98d31be92be60ce731f15e639224a7125b932d6b7cd09501705f37a1d3363b83bb237a0e0385352a6f9086165a8f81445841631841127eb499ced8e7b93aaca"' : 'data-target="#xs-injectables-links-module-UserModule-b98d31be92be60ce731f15e639224a7125b932d6b7cd09501705f37a1d3363b83bb237a0e0385352a6f9086165a8f81445841631841127eb499ced8e7b93aaca"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-b98d31be92be60ce731f15e639224a7125b932d6b7cd09501705f37a1d3363b83bb237a0e0385352a6f9086165a8f81445841631841127eb499ced8e7b93aaca"' :
                                        'id="xs-injectables-links-module-UserModule-b98d31be92be60ce731f15e639224a7125b932d6b7cd09501705f37a1d3363b83bb237a0e0385352a6f9086165a8f81445841631841127eb499ced8e7b93aaca"' }>
                                        <li class="link">
                                            <a href="injectables/EndorsementService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EndorsementService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RepoFilterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepoFilterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RepoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserCollaborationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserCollaborationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserFollowService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserFollowService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserHighlightsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserHighlightsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserNotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserNotificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserReposModule.html" data-type="entity-link" >UserReposModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserReposModule-c13938b973aeab7fa880821795089d013d1903b2067931cdd48a201f54b9ab438fe93489f4fe357bf8f2a597e5cd46c048989fd888a4a34892000c38afd46985"' : 'data-target="#xs-injectables-links-module-UserReposModule-c13938b973aeab7fa880821795089d013d1903b2067931cdd48a201f54b9ab438fe93489f4fe357bf8f2a597e5cd46c048989fd888a4a34892000c38afd46985"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserReposModule-c13938b973aeab7fa880821795089d013d1903b2067931cdd48a201f54b9ab438fe93489f4fe357bf8f2a597e5cd46c048989fd888a4a34892000c38afd46985"' :
                                        'id="xs-injectables-links-module-UserReposModule-c13938b973aeab7fa880821795089d013d1903b2067931cdd48a201f54b9ab438fe93489f4fe357bf8f2a597e5cd46c048989fd888a4a34892000c38afd46985"' }>
                                        <li class="link">
                                            <a href="injectables/UserReposService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserReposService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VoteModule.html" data-type="entity-link" >VoteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-VoteModule-a2596780da847218ea4c7c72bae76af446cd43fc6907d3841a440b2959c12c2d26a764411eeaf9d737930718fb521a8b8daaf2588073714f902d6a06c1691142"' : 'data-target="#xs-controllers-links-module-VoteModule-a2596780da847218ea4c7c72bae76af446cd43fc6907d3841a440b2959c12c2d26a764411eeaf9d737930718fb521a8b8daaf2588073714f902d6a06c1691142"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VoteModule-a2596780da847218ea4c7c72bae76af446cd43fc6907d3841a440b2959c12c2d26a764411eeaf9d737930718fb521a8b8daaf2588073714f902d6a06c1691142"' :
                                            'id="xs-controllers-links-module-VoteModule-a2596780da847218ea4c7c72bae76af446cd43fc6907d3841a440b2959c12c2d26a764411eeaf9d737930718fb521a8b8daaf2588073714f902d6a06c1691142"' }>
                                            <li class="link">
                                                <a href="controllers/RepoVoteController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepoVoteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VoteModule-a2596780da847218ea4c7c72bae76af446cd43fc6907d3841a440b2959c12c2d26a764411eeaf9d737930718fb521a8b8daaf2588073714f902d6a06c1691142"' : 'data-target="#xs-injectables-links-module-VoteModule-a2596780da847218ea4c7c72bae76af446cd43fc6907d3841a440b2959c12c2d26a764411eeaf9d737930718fb521a8b8daaf2588073714f902d6a06c1691142"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VoteModule-a2596780da847218ea4c7c72bae76af446cd43fc6907d3841a440b2959c12c2d26a764411eeaf9d737930718fb521a8b8daaf2588073714f902d6a06c1691142"' :
                                        'id="xs-injectables-links-module-VoteModule-a2596780da847218ea4c7c72bae76af446cd43fc6907d3841a440b2959c12c2d26a764411eeaf9d737930718fb521a8b8daaf2588073714f902d6a06c1691142"' }>
                                        <li class="link">
                                            <a href="injectables/VoteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VoteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/DbBakedRepo.html" data-type="entity-link" >DbBakedRepo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbCommitAuthors.html" data-type="entity-link" >DbCommitAuthors</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbCommits.html" data-type="entity-link" >DbCommits</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbContribution.html" data-type="entity-link" >DbContribution</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbContributionsProjects.html" data-type="entity-link" >DbContributionsProjects</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbContributionStatTimeframe.html" data-type="entity-link" >DbContributionStatTimeframe</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbContributorCategoryTimeframe.html" data-type="entity-link" >DbContributorCategoryTimeframe</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbCustomer.html" data-type="entity-link" >DbCustomer</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbEmoji.html" data-type="entity-link" >DbEmoji</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbEndorsement.html" data-type="entity-link" >DbEndorsement</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbInsight.html" data-type="entity-link" >DbInsight</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbInsightMember.html" data-type="entity-link" >DbInsightMember</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbInsightRepo.html" data-type="entity-link" >DbInsightRepo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbLog.html" data-type="entity-link" >DbLog</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbPRInsight.html" data-type="entity-link" >DbPRInsight</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbPullRequest.html" data-type="entity-link" >DbPullRequest</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbRepo.html" data-type="entity-link" >DbRepo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbRepoToUserStargazers.html" data-type="entity-link" >DbRepoToUserStargazers</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbRepoToUserStars.html" data-type="entity-link" >DbRepoToUserStars</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbRepoToUserSubmissions.html" data-type="entity-link" >DbRepoToUserSubmissions</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbRepoToUserVotes.html" data-type="entity-link" >DbRepoToUserVotes</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbSubscription.html" data-type="entity-link" >DbSubscription</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbUser.html" data-type="entity-link" >DbUser</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbUserCollaboration.html" data-type="entity-link" >DbUserCollaboration</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbUserHighlight.html" data-type="entity-link" >DbUserHighlight</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbUserHighlightReaction.html" data-type="entity-link" >DbUserHighlightReaction</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbUserList.html" data-type="entity-link" >DbUserList</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbUserListContributor.html" data-type="entity-link" >DbUserListContributor</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbUserListContributorStat.html" data-type="entity-link" >DbUserListContributorStat</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbUserNotification.html" data-type="entity-link" >DbUserNotification</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbUserOrganization.html" data-type="entity-link" >DbUserOrganization</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbUserRepo.html" data-type="entity-link" >DbUserRepo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbUserTopRepo.html" data-type="entity-link" >DbUserTopRepo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DbUserToUserFollows.html" data-type="entity-link" >DbUserToUserFollows</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BakeRepoDto.html" data-type="entity-link" >BakeRepoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CollaboratorsDto.html" data-type="entity-link" >CollaboratorsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommitAuthorDto.html" data-type="entity-link" >CommitAuthorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommitsDto.html" data-type="entity-link" >CommitsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContributionPageOptionsDto.html" data-type="entity-link" >ContributionPageOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContributionsTimeframeDto.html" data-type="entity-link" >ContributionsTimeframeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBlogSummaryDto.html" data-type="entity-link" >CreateBlogSummaryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEndorsementDto.html" data-type="entity-link" >CreateEndorsementDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInsightDto.html" data-type="entity-link" >CreateInsightDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInsightMemberDto.html" data-type="entity-link" >CreateInsightMemberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateIssueSummaryDto.html" data-type="entity-link" >CreateIssueSummaryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLogDto.html" data-type="entity-link" >CreateLogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserCollaborationDto.html" data-type="entity-link" >CreateUserCollaborationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserHighlightDto.html" data-type="entity-link" >CreateUserHighlightDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserListDto.html" data-type="entity-link" >CreateUserListDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatabaseLoggerMiddleware.html" data-type="entity-link" >DatabaseLoggerMiddleware</a>
                            </li>
                            <li class="link">
                                <a href="classes/DbFilteredUser.html" data-type="entity-link" >DbFilteredUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/DbPullRequestContributor.html" data-type="entity-link" >DbPullRequestContributor</a>
                            </li>
                            <li class="link">
                                <a href="classes/DbTopUser.html" data-type="entity-link" >DbTopUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/DbUserHighlightReactionResponse.html" data-type="entity-link" >DbUserHighlightReactionResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/DbUserHighlightRepo.html" data-type="entity-link" >DbUserHighlightRepo</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilteredUsersDto.html" data-type="entity-link" >FilteredUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterListContributorsDto.html" data-type="entity-link" >FilterListContributorsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterOptionsDto.html" data-type="entity-link" >FilterOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenerateCodeExplanationDto.html" data-type="entity-link" >GenerateCodeExplanationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenerateCodeRefactorSuggestionDto.html" data-type="entity-link" >GenerateCodeRefactorSuggestionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenerateCodeTestSuggestionDto.html" data-type="entity-link" >GenerateCodeTestSuggestionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeneratePullRequestDescriptionDto.html" data-type="entity-link" >GeneratePullRequestDescriptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HighlightOptionsDto.html" data-type="entity-link" >HighlightOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InsightOptionsDto.html" data-type="entity-link" >InsightOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InsightPageOptionsDto.html" data-type="entity-link" >InsightPageOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageDto.html" data-type="entity-link" >PageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageMetaDto.html" data-type="entity-link" >PageMetaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageOptionsDto.html" data-type="entity-link" >PageOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PullRequestContributorInsightsDto.html" data-type="entity-link" >PullRequestContributorInsightsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PullRequestContributorOptionsDto.html" data-type="entity-link" >PullRequestContributorOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PullRequestPageOptionsDto.html" data-type="entity-link" >PullRequestPageOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RepoInfo.html" data-type="entity-link" >RepoInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/RepoPageOptionsDto.html" data-type="entity-link" >RepoPageOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RepoSearchOptionsDto.html" data-type="entity-link" >RepoSearchOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SupabaseAuthDto.html" data-type="entity-link" >SupabaseAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TopUsersDto.html" data-type="entity-link" >TopUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEndorsementDto.html" data-type="entity-link" >UpdateEndorsementDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInsightDto.html" data-type="entity-link" >UpdateInsightDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInsightMemberDto.html" data-type="entity-link" >UpdateInsightMemberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserCollaborationDto.html" data-type="entity-link" >UpdateUserCollaborationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserEmailPreferencesDto.html" data-type="entity-link" >UpdateUserEmailPreferencesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserProfileInterestsDto.html" data-type="entity-link" >UpdateUserProfileInterestsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserListMostActiveContributorsDto.html" data-type="entity-link" >UserListMostActiveContributorsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserOnboardingDto.html" data-type="entity-link" >UserOnboardingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepoOptionsDto.html" data-type="entity-link" >UserRepoOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepoOptionsDto-1.html" data-type="entity-link" >UserRepoOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VotedRepoDto.html" data-type="entity-link" >VotedRepoDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CustomLogger.html" data-type="entity-link" >CustomLogger</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpLoggerMiddleware.html" data-type="entity-link" >HttpLoggerMiddleware</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/EndorsementTokenGuard.html" data-type="entity-link" >EndorsementTokenGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ChatResponse.html" data-type="entity-link" >ChatResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PageMetaParameters.html" data-type="entity-link" >PageMetaParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationInput.html" data-type="entity-link" >PaginationInput</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
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
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});