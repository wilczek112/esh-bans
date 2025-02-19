<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;

class SetLanguage
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $language = $request->cookie('language');


        if (!$language) {
             //Get Browser Lang.
             $browserLang = substr($request->server('HTTP_ACCEPT_LANGUAGE'), 0, 2);
              if(in_array($browserLang ,['bg', 'cz', 'de', 'en', 'es', 'fr', 'hu', 'it', 'ja', 'ko', 'pl', 'pt', 'ro', 'ru', 'sk', 'tr', 'uk', 'zh'])){
                  $language = $browserLang;
              }else {
                 $language = 'en';
            }
        }

        if ($language) {
            App::setLocale($language);
        }
        return $next($request);
    }
}
