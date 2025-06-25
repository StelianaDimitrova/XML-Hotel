<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:output method="xml" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <hotel>
            <xsl:for-each select="hotel/hall">
                <hall>
                    <name><xsl:call-template name="hall_name"/></name>
                    <work_time><xsl:call-template name="hall_work_time"/></work_time>
                    <capacity><xsl:call-template name="hall_capacity"/></capacity>
                    <activity><xsl:call-template name="hall_activity"/></activity>
                </hall>
            </xsl:for-each>
        </hotel>
    </xsl:template>

    <xsl:template name="hall_name">
        <xsl:value-of select="name"/>
    </xsl:template>

    <xsl:template name="hall_work_time">
        <xsl:value-of select="work_time"/>
    </xsl:template>

    <xsl:template name="hall_capacity">
        <xsl:value-of select="capacity"/>
    </xsl:template>

    <xsl:template name="hall_activity">
        <host>
            <xsl:value-of select="activity/host"/>
        </host>
        <number_of_people>
            <xsl:value-of select="activity/number_of_people"/>
        </number_of_people>
        <age_restrictions>
            <xsl:value-of select="activity/age_restrictions"/>
        </age_restrictions>
        <duration>
            <xsl:value-of select="activity/duration"/>
        </duration>
        <number_of_breaks>
            <xsl:value-of select="activity/number_of_breaks"/>
        </number_of_breaks>
    </xsl:template>

</xsl:stylesheet>