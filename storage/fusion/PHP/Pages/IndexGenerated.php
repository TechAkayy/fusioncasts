<?php

/**
 * This file was automatically generated by Fusion.
 * You should not edit it.
 */
namespace Fusion\Generated\Pages;

use App\Models\Podcast;
class IndexGenerated extends \Fusion\FusionPage
{
    #[\Fusion\Attributes\ServerOnly]
    public array $discoveredProps = ['search', 'podcasts', 'podcastsRaw', 'name'];
    use \Fusion\Concerns\IsProceduralPage;
    public function runProceduralCode()
    {
        $search = $this->prop(name: 'search', default: '')->value();
        $podcasts = $this->prop(name: 'podcasts', default: function () use ($search) {
            if ($search) {
                return Podcast::query()->where('title', 'like', "%{$search}%")->get();
            }
            return Podcast::all();
        })->readonly()->value();
        $podcastsRaw = $this->prop(name: 'podcastsRaw', default: fn() => Podcast::all())->value();
        $this->expose(favorite: function (Podcast $podcast) {
            return response()->json($podcast->toggleFavorite());
        });
        $name = $this->prop(name: 'name', default: 'Aaron')->value();
        $this->syncProps(get_defined_vars());
    }
    #[\Fusion\Attributes\Expose]
    public function favorite(Podcast $podcast)
    {
        return call_user_func($this->actions[__FUNCTION__], ...func_get_args());
    }
}