import siteMeta from '../../../app/site'
import { useBrowserLocation } from '@vueuse/core'

export const useNavMenu = () => {
    const navs = siteMeta.navs

    const navsPrimary = navs.filter(nav => nav.types.find(({ type }) => type === 'primary'))

    const navsSecondary = navs.filter(nav => nav.types.find(({ type }) => type === 'secondary'))

    const currentPath = computed(() => {
        return useBrowserLocation().value.pathname
    })

    return {
        allNavs: navs,
        navsPrimary,
        navsSecondary,
        currentPath,
    }
}
