export const URLRegex = /(^$|((https?):\/\/)?(www.)?[a-zA-Z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9-#]+)*\/?(\?[a-zA-Z0-9-_%]+=[a-zA-Z0-9-_%]+&?)?$)/;
export const URLSocialRegex = /(((https?):\/\/)?(www\.)?[a-zA-Z0-9]+(\.[a-z]{2,}){1,3})(\/|\?)(.+)/;
export const SplitDomainRegex = /[/?&]+/;
export const EmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const DateRegex = /^[0-9]{2}.[0-9]{2}.[0-9]{4}$/;
