(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{662:function(e,t,a){"use strict";a.r(t);var r=a(1),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("hr"),e._v(" "),a("h2",{attrs:{id:"adr-001title-interchain-accountsstatus-draft-implementscategory-featureauthor-sean-king-damian-nolancreated-2022-01-19mdified-2022-01-19requires-cosmos-sdk-go-ibcrequired-by-mauthimplements-interchain-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-001title-interchain-accountsstatus-draft-implementscategory-featureauthor-sean-king-damian-nolancreated-2022-01-19mdified-2022-01-19requires-cosmos-sdk-go-ibcrequired-by-mauthimplements-interchain-accounts"}},[e._v("#")]),e._v(" ADR: 001\nTitle: Interchain Accounts\nStatus: Draft Implements\nCategory: Feature\nAuthor: Sean King & Damian Nolan\nCreated: 2022-01-19\nMdified: 2022-01-19\nRequires: Cosmos-SDK, go-ibc\nRequired-By: mauth\nImplements: Interchain Accounts")]),e._v(" "),a("h1",{attrs:{id:"adr-001-interchain-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-001-interchain-accounts"}},[e._v("#")]),e._v(" ADR 001: Interchain Accounts")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2022-02-04: added content")]),e._v(" "),a("li",[e._v("2022-01-19: init")])]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v('This is the Core Interchain Accounts Module. It allows the Cosmos Hub to act as a host chain with interchain accounts that are controlled by external IBC connected "Controller" blockchains. Candidate chains include Umee, Quicksilver, Sommelier. It is also a necessary component for a Authentication Module that allows the Cosmos Hub to act as a Controller chain as well. This will be recorded in a separate ADR.')]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("This allows the Hub to participate in advanced cross-chain defi operations, like Liquid Staking and various protocol controlled value applications.")]),e._v(" "),a("h2",{attrs:{id:"desired-outcome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#desired-outcome"}},[e._v("#")]),e._v(" Desired Outcome")]),e._v(" "),a("p",[e._v("The hub can be used trustlessly as a host chain in the configuration of Interchain Accounts.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("p",[e._v('There has been preliminary work done to understand if this increases any security feature of the Cosmos Hub. One thought was that this capability is similar to contract to contract interactions which are possible on virtual machine blockchains like EVM chains. Those interactions introduced a new attack vector, called a re-entrancy bug, which was the culprit of "The DAO hack on Ethereum". We believe there is no risk of these kinds of attacks with Interchain Accounts because they require the interactions to be atomic and Interchain Accounts are asynchronous.')]),e._v(" "),a("h4",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("This is the first of its kind.")]),e._v(" "),a("h4",{attrs:{id:"forward-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forward-compatibility"}},[e._v("#")]),e._v(" Forward Compatibility")]),e._v(" "),a("p",[e._v("There are future releases of Interchain Accounts which are expected to be backwards compatible.")]),e._v(" "),a("h2",{attrs:{id:"technical-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technical-specification"}},[e._v("#")]),e._v(" Technical Specification")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/app/ics-027-interchain-accounts/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-27 Spec"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[e._v("#")]),e._v(" Development")]),e._v(" "),a("ul",[a("li",[e._v("Integration requirements\n"),a("ul",[a("li",[e._v("Development has occured in "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC-go"),a("OutboundLink")],1),e._v(" and progress tracked on the project board there.")])])]),e._v(" "),a("li",[e._v("Testing (Simulations, Core Team Testing, Partner Testing)\n"),a("ul",[a("li",[e._v("Simulations and Core Team tested this module")])])]),e._v(" "),a("li",[e._v("Audits (Internal Dev review, Third-party review, Bug Bounty)\n"),a("ul",[a("li",[e._v("An internal audit, an audit from Informal Systems, and an audit from Trail of Bits all took place with fixes made to all findings.")])])]),e._v(" "),a("li",[e._v("Networks (Testnets, Productionnets, Mainnets)\n"),a("ul",[a("li",[e._v("Testnets")])])])]),e._v(" "),a("h2",{attrs:{id:"governance-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#governance-optional"}},[e._v("#")]),e._v(" Governance [optional]")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Needs Signaling Proposal")])]),e._v(" "),a("li",[e._v("Core Community Governance\n"),a("ul",[a("li",[e._v("N/A")])])]),e._v(" "),a("li",[e._v("Steering Community\n"),a("ul",[a("li",[e._v("N/A. Possibly Aditya Srinpal, Sean King, Bez?")])])]),e._v(" "),a("li",[e._v("Timelines & Roadmap\n"),a("ul",[a("li",[e._v("Expected to be released as part of IBC 3.0 in Feb 2022 (currently in "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/releases/tag/v3.0.0-beta1",target:"_blank",rel:"noopener noreferrer"}},[e._v("beta release"),a("OutboundLink")],1),e._v(")")])])])]),e._v(" "),a("h2",{attrs:{id:"project-integrations-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-integrations-optional"}},[e._v("#")]),e._v(" Project Integrations [optional]")]),e._v(" "),a("ul",[a("li",[e._v("Gaia Integrations\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/gaia/pull/1150",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[e._v("Integration Partner\n"),a("ul",[a("li",[e._v("IBC Team")])])])]),e._v(" "),a("h4",{attrs:{id:"downstream-user-impact-report"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downstream-user-impact-report"}},[e._v("#")]),e._v(" Downstream User Impact Report")]),e._v(" "),a("p",[e._v("(Needs to be created)")]),e._v(" "),a("h4",{attrs:{id:"upstream-partner-impact-report"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upstream-partner-impact-report"}},[e._v("#")]),e._v(" Upstream Partner Impact Report")]),e._v(" "),a("p",[e._v("(Needs to be created)")]),e._v(" "),a("h4",{attrs:{id:"inter-module-dependence-report"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inter-module-dependence-report"}},[e._v("#")]),e._v(" Inter-module Dependence Report")]),e._v(" "),a("p",[e._v("(Needs to be created)")]),e._v(" "),a("h2",{attrs:{id:"support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support"}},[e._v("#")]),e._v(" Support")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://ibc.cosmos.network/main/apps/interchain-accounts/overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"additional-research-references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-research-references"}},[e._v("#")]),e._v(" Additional Research & References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://medium.com/chainapsis/why-interchain-accounts-change-everything-for-cosmos-interoperability-59c19032bf11",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why Interchain Accounts Change Everything for Cosmos Interoperability"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/interchain-accounts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interchain Account Auth Module Demo Repo"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);